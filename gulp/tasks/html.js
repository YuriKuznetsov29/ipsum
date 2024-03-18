import fileinclude from "gulp-file-include"
import webphtml from "gulp-webp-html-nosvg"
import versionNumber from "gulp-version-number"
import pug from "gulp-pug"

export const html = () => {
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "HTML",
                        message: "Error <%= error.message %>",
                    })
                )
            )
            // .pipe(fileinclude())
            .pipe(
                pug({
                    // Сжатие HTML файла
                    pretty: true,
                    // Показывать в терминале какой файл обработан
                    verbose: true,
                    basedir: "src",
                })
            )
            .pipe(app.plugins.replace(/@img\//g, "img/"))
            .pipe(app.plugins.if(app.isProd, webphtml()))
            // .pipe(app.gulp.dest("./public/"))
            .pipe(
                app.plugins.if(
                    app.isProd,
                    versionNumber({
                        value: "%DT%",
                        replaces: [[/#{VERSION_REPlACE}#/g, "%TS%"]],
                        append: {
                            key: "_v",
                            cover: 0,
                            to: ["css", "js"],
                        },
                        output: {
                            file: "gulp/version.json",
                        },
                    })
                )
            )
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    )
}
