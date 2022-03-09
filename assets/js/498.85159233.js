(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{963:function(t,e,v){"use strict";v.r(e);var d=v(35),_=Object(d.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"bashから来た人向け"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bashから来た人向け"}},[t._v("#")]),t._v(" Bashから来た人向け")]),t._v(" "),v("p",[t._v("注: このテーブルはNu 1.14.1以降を想定しています。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Bash")]),t._v(" "),v("th",[t._v("Nu")]),t._v(" "),v("th",[t._v("Task")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("ls")])]),t._v(" "),v("td",[v("code",[t._v("ls")])]),t._v(" "),v("td",[t._v("Lists the files in the current directory")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("ls <dir>")])]),t._v(" "),v("td",[v("code",[t._v("ls <dir>")])]),t._v(" "),v("td",[t._v("Lists the files in the given directory")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("ls pattern*")])]),t._v(" "),v("td",[v("code",[t._v("ls pattern*")])]),t._v(" "),v("td",[t._v("Lists files that match a given pattern")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("ls -la")])]),t._v(" "),v("td",[v("code",[t._v("ls --long --all")]),t._v(" or "),v("code",[t._v("ls -la")])]),t._v(" "),v("td",[t._v("List files with all available information, including hidden files")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("ls -d */")])]),t._v(" "),v("td",[v("code",[t._v("ls | where type == Dir")])]),t._v(" "),v("td",[t._v("List directories")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("find . -name *.rs")])]),t._v(" "),v("td",[v("code",[t._v("ls **/*.rs")])]),t._v(" "),v("td",[t._v("Find recursively all files that match a given pattern")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("cd <directory>")])]),t._v(" "),v("td",[v("code",[t._v("cd <directory>")])]),t._v(" "),v("td",[t._v("Change to the given directory")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("cd")])]),t._v(" "),v("td",[v("code",[t._v("cd")])]),t._v(" "),v("td",[t._v("Change to the home directory")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mkdir <path>")])]),t._v(" "),v("td",[v("code",[t._v("mkdir <path>")])]),t._v(" "),v("td",[t._v("Creates the given path")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mkdir -p <path>")])]),t._v(" "),v("td",[v("code",[t._v("mkdir <path>")])]),t._v(" "),v("td",[t._v("Creates the given path, creating parents as necessary")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("touch test.txt")])]),t._v(" "),v("td",[v("code",[t._v("touch test.txt")])]),t._v(" "),v("td",[t._v("Create a file")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("> <path>")])]),t._v(" "),v("td",[v("code",[t._v("| save --raw <path>")])]),t._v(" "),v("td",[t._v("Save string into a file")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("cat <path>")])]),t._v(" "),v("td",[v("code",[t._v("open --raw <path>")])]),t._v(" "),v("td",[t._v("Display the contents of the given file")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("code",[t._v("open <path>")])]),t._v(" "),v("td",[t._v("Read a file as structured data")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mv <source> <dest>")])]),t._v(" "),v("td",[v("code",[t._v("mv <source> <dest>")])]),t._v(" "),v("td",[t._v("Move file to new location")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("cp <source> <dest>")])]),t._v(" "),v("td",[v("code",[t._v("cp <source> <dest>")])]),t._v(" "),v("td",[t._v("Copy file to new location")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("cp -r <source> <dest>")])]),t._v(" "),v("td",[v("code",[t._v("cp -r <source> <dest>")])]),t._v(" "),v("td",[t._v("Copy directory to a new location, recursively")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("rm <path>")])]),t._v(" "),v("td",[v("code",[t._v("rm <path>")])]),t._v(" "),v("td",[t._v("Remove the given file")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("code",[t._v("rm -t <path>")])]),t._v(" "),v("td",[t._v("Move the given file to the system trash")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("rm -rf <path>")])]),t._v(" "),v("td",[v("code",[t._v("rm -r <path>")])]),t._v(" "),v("td",[t._v("Recursively removes the given path")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("chmod")])]),t._v(" "),v("td",[v("code",[t._v("<not yet possible>")])]),t._v(" "),v("td",[t._v("Changes the file attributes")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("date -d <date>")])]),t._v(" "),v("td",[v("code",[t._v("echo <date> | str to-datetime -f <format>")])]),t._v(" "),v("td",[t._v("Parse a date ("),v("a",{attrs:{href:"https://docs.rs/chrono/0.4.15/chrono/format/strftime/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("format documentation"),v("OutboundLink")],1),t._v(")")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("sed")])]),t._v(" "),v("td",[v("code",[t._v("str find-replace")])]),t._v(" "),v("td",[t._v("Find and replace a pattern in a string")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("grep <pattern>")])]),t._v(" "),v("td",[v("code",[t._v("where $it =~ <substring>")])]),t._v(" "),v("td",[t._v("Filter strings that contain the substring")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("man <command>")])]),t._v(" "),v("td",[v("code",[t._v("help <command>")])]),t._v(" "),v("td",[t._v("Get the help for a given command")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("code",[t._v("help commands")])]),t._v(" "),v("td",[t._v("List all available commands")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[v("code",[t._v("help --find <string>")])]),t._v(" "),v("td",[t._v("Search for match in all available commands")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("command1 && command2")])]),t._v(" "),v("td",[v("code",[t._v("command1; command2")])]),t._v(" "),v("td",[t._v("Run a command, and if it's successful run a second")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("stat $(which git)")])]),t._v(" "),v("td",[v("code",[t._v("stat (which git).path")])]),t._v(" "),v("td",[t._v("Use command output as argument for other command")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("echo $PATH")])]),t._v(" "),v("td",[v("code",[t._v("echo $nu.path")])]),t._v(" "),v("td",[t._v("See the current path")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),v("td",[v("code",[t._v("config set path [<dir1> <dir2> ...]")])]),t._v(" "),v("td",[t._v("Update PATH permanently")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("export PATH = $PATH:/usr/other/bin")])]),t._v(" "),v("td",[v("code",[t._v("pathvar add <path>")])]),t._v(" "),v("td",[t._v("Update PATH temporarily")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("export")])]),t._v(" "),v("td",[v("code",[t._v("echo $nu.env")])]),t._v(" "),v("td",[t._v("List the current environment variables")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),v("td",[v("code",[t._v("echo $nu.env | insert var value | config set_into env")])]),t._v(" "),v("td",[t._v("Update environment variables permanently")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("FOO=BAR ./bin")])]),t._v(" "),v("td",[v("code",[t._v("FOO=BAR ./bin")])]),t._v(" "),v("td",[t._v("Update environment temporarily")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("export FOO=BAR")])]),t._v(" "),v("td",[v("code",[t._v("let-env FOO = BAR")])]),t._v(" "),v("td",[t._v("Set environment variable for current session")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("unset FOO")])]),t._v(" "),v("td",[v("code",[t._v("let-env FOO = $nothing")])]),t._v(" "),v("td",[t._v("Unset environment variable for current session")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v('alias s="git status -sb"')])]),t._v(" "),v("td",[v("code",[t._v("alias s = git status -sb")])]),t._v(" "),v("td",[t._v("Define an alias temporarily")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),v("td",[v("code",[t._v("alias --save myecho [msg] { echo Hello $msg }")])]),t._v(" "),v("td",[t._v("Define an alias for all sessions (persist it in startup config)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("<update ~/.bashrc>")])]),t._v(" "),v("td",[v("code",[t._v("<update nu/config.toml>")])]),t._v(" "),v("td",[t._v("Add and edit alias permanently (for new shells), find path for the file with "),v("code",[t._v("config path")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("bash -c <commands>")])]),t._v(" "),v("td",[v("code",[t._v("nu -c <commands>")])]),t._v(" "),v("td",[t._v("Run a pipeline of commands (requires 0.9.1 or later)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("bash <script file>")])]),t._v(" "),v("td",[v("code",[t._v("nu <script file>")])]),t._v(" "),v("td",[t._v("Run a script file (requires 0.9.1 or later)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("\\")])]),t._v(" "),v("td",[v("code",[t._v("<not yet possible>")])]),t._v(" "),v("td",[t._v("Line continuation is not yet supported.")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);