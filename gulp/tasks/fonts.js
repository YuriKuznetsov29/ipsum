import fs from "fs"
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2"

export const otfToTtf = () => {
    // ищем шрифты .otf
    return app.gulp
        .src(`${app.path.src.fonts}/*.otf`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "FONT",
                    message: "Error <%= error.message %>",
                })
            )
        )
        .pipe(fonter({ formats: ["ttf"] }))
        .pipe(app.gulp.dest(`${app.path.src.fonts}`))
}

export const ttfToWoff = () => {
    // ищем шрифты .ttf
    return (
        app.gulp
            .src(`${app.path.src.fonts}*.ttf`, {})
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "FONT",
                        message: "Error <%= error.message %>",
                    })
                )
            )
            // конвертируем в .woff
            .pipe(fonter({ formats: ["woff"] }))
            .pipe(app.gulp.dest(app.path.build.fonts))
            .pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`))
            // конвертируем в .woff2
            .pipe(ttf2woff2())
            .pipe(app.gulp.dest(app.path.build.fonts))
    )
}

export const fontsStyle = () => {
    // Файл стилей подключения шрифтов
    let fontsFile = `./src/scss/fonts.scss`
    // Проверяем существуют ли файлы шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // Проверяем существует ли файл стилей для подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                // Если файла нет, создаем его
                fs.writeFile(fontsFile, "", cb)
                let newFileOnly
                for (var i = 0; i < fontsFiles.length; i++) {
                    // Записываем подключения шрифтов в файл стилей
                    let fontFileName = fontsFiles[i].split(".")[0]
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split("-")[0]
                            ? fontFileName.split("-")[0]
                            : fontFileName
                        let fontWeight = fontFileName.split("-")[1]
                            ? fontFileName.split("-")[1]
                            : fontFileName
                        if (fontWeight.toLowerCase() === "thin") {
                            fontWeight = 100
                        } else if (fontWeight.toLowerCase() === "Thin") {
                            fontWeight = 100
                        } else if (fontWeight.toLowerCase() === "extralight") {
                            fontWeight = 200
                        } else if (fontWeight.toLowerCase() === "Extralight") {
                            fontWeight = 200
                        } else if (fontWeight.toLowerCase() === "light") {
                            fontWeight = 300
                        } else if (fontWeight.toLowerCase() === "Light") {
                            fontWeight = 300
                        } else if (fontWeight.toLowerCase() === "medium") {
                            fontWeight = 500
                        } else if (fontWeight.toLowerCase() === "Medium") {
                            fontWeight = 500
                        } else if (fontWeight.toLowerCase() === "semibold") {
                            fontWeight = 600
                        } else if (fontWeight.toLowerCase() === "Semibold") {
                            fontWeight = 600
                        } else if (fontWeight.toLowerCase() === "bold") {
                            fontWeight = 700
                        } else if (fontWeight.toLowerCase() === "Bold") {
                            fontWeight = 700
                        } else if (
                            fontWeight.toLowerCase() === "extrabold" ||
                            fontWeight.toLowerCase() === "heavy"
                        ) {
                            fontWeight = 800
                        } else if (
                            fontWeight.toLowerCase() === "Extrabold" ||
                            fontWeight.toLowerCase() === "Heavy"
                        ) {
                            fontWeight = 800
                        } else if (fontWeight.toLowerCase() === "black") {
                            fontWeight = 900
                        } else if (fontWeight.toLowerCase() === "Black") {
                            fontWeight = 900
                        } else {
                            fontWeight = 400
                        }
                        fs.appendFile(
                            fontsFile,
                            `@font-face {\n\tfont-family: "${fontName}";\n\tfont-display: swap;\n\tsrc: url("../files/${fontFileName}.woff2") format("woff2"), url("../files/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\t}\r\n`,
                            cb
                        )
                        newFileOnly = fontFileName
                    }
                }
            } else {
                // Если файл есть, выводим сообщение
                console.log(
                    "Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!"
                )
            }
        }
    })

    return app.gulp.src(`${app.path.src}`)
    function cb() {}
}
