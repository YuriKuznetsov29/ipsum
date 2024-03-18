import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"

import cleanCss from "gulp-clean-css" // Сжатие css
import webpcss from "gulp-webpcss" // Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer" // Добавление вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries" // Группировка медиазапросов

const sass = gulpSass(dartSass)

export const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss, { sourcemaps: app.isDev })
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "SCSS",
                        message: "Error <%= error.message %>",
                    })
                )
            )
            .pipe(app.plugins.replace(/@img\//g, "../img/"))
            .pipe(
                sass({
                    outputStyle: "expanded",
                })
            )
            .pipe(app.plugins.if(app.isProd, groupCssMediaQueries()))
            .pipe(
                app.plugins.if(
                    app.isProd,
                    webpcss({
                        webpClass: ".webp",
                        noWebpClass: ".no-webp",
                    })
                )
            )
            .pipe(
                app.plugins.if(
                    app.isProd,
                    autoprefixer({
                        grid: true,
                        overrideBrowsersList: ["last 3 versions"],
                        cascade: true,
                    })
                )
            )
            // Раскоментить если нужен не сжатый файл стилей
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(cleanCss())
            .pipe(
                rename({
                    extname: ".min.css",
                })
            )
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.stream())
    )
}
