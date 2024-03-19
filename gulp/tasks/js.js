import webpack from "webpack-stream";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const js = () => {
    return app.gulp
        .src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error <%= error.message %>",
                })
            )
        )
        .pipe(
            webpack({
                mode: app.isDev ? "development" : "production",
                output: {
                    filename: "app.min.js",
                },
                plugins: [new MiniCssExtractPlugin()],
                module: {
                    rules: [
                        {
                            test: /\.css$/i,
                            use: [MiniCssExtractPlugin.loader, "css-loader"],
                        },
                    ],
                },
            })
        )
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};
