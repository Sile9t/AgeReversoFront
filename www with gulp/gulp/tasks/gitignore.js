import fs from "fs";

export const gitignore = () => {
   const fileContent = [
      {
         title: "# Игнорировать файлы и каталоги сборки и зависимостей",
         content: [app.path.buildFolder.slice(2) + "/", "node_modules/", "bower_components/", "package-lock.json", "version.json"],
      },
      {
         title: "# Игнорировать файлы, созданные ОС",
         content: ["ehthumbs.db", "Thumbs.db", "*.DS_Store"],
      },
      {
         title: "# Игнорировать файлы настроек редакторов",
         content: [
            ".idea/",
            "*.sublime-project",
            "*.sublime-workspace",
            "*.komodoproject",
            ".vscode/*",
            "!.vscode/extensions.json",
         ],
      },
      {
         title: "# Игнорировать файлы карт",
         content: ["*.css.map", "*.js.map"],
      },
      {
         title: "# Игнорировать файлы кэша",
         content: [".sass-cache"],
      },
      {
         title: "# Игнорировать логи",
         content: ["logs/", "logs", "npm-debug.log*", "yarn-debug.log*", "yarn-error.log*", "pnpm-debug.log*", "lerna-debug.log*"],
      },
      {
         title: "# Игнорировать архивы",
         content: ["**/*.zip", "**/*.rar"],
      },
      {
         title: "# Игнорировать папку с архивом файлов",
         content: [".DS_Store", ".idea", "*.suo", "*.ntvs*", "*.njsproj", "*.sln", "*.sw?"],
      },
   ];

   if (!fs.existsSync(".gitignore")) {
      const text = fileContent.map((item) => [item.title, item.content.join("\r\n")].join("\r\n")).join("\r\n\r\n");
      fs.writeFile("./.gitignore", text, cb);
   }

   return app.gulp.src(`${app.path.srcFolder}`);
};

function cb() {}
