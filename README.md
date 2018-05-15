# acentera-cms-release
ACenterA CMS for GoHugo ( Submodule )

This is the CMS Admin interface in Vue.JS for ACenterA's implementation for GoHugo.

Inside your Hugo Website Root where config.toml exists execute the following command to add the CMS Interface.

git submodule add git@github.com/ACenterA/acentera-cms-admin admin

> You could lock it down to a specific released Tag version.

Once that is done you can launch the ACenterA Implementation of GoHugo to access the CMS

> acentera-hugo serve --bind 0.0.0.0 --forceSyncStatic --destination public --buildDrafts --buildFuture --enableApi=true --watch

Once that is launched, you can visit http://localhost:8081/admin/ in order to access the CMS.

For more information visit https://acenteracms.org/
