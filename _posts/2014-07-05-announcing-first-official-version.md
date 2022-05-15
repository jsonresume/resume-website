---
layout: post
title: "First Official Release"
date: 2014-07-31 14:18:05
permalink: /blog/first-official-release
author: Thomas Davis
---

It has been just over three weeks since JSON resume first went public, and we are proud to announce the first official version of the specification. After much consideration we decided to launch the first version as **0.0.0**, which assumes everything up until this point was conceptual, and thus no backwards compatibility has been built out.

Unfortunately this means that if you created a resume before this release, most parts of the ecosystem will not work for you. Though there weren't too many changes so visit the [specification page](/specification) and update your `resume.json` accordingly.

Make sure you reinstall the latest version of the CLI tool by typing `sudo npm install -g resume-cli` into terminal. Once installed, you can also take advantage of the `resume test` command to test if your `resume.json` is compatible with version **0.0.0**.

For a full list of changes, view the [README](https://github.com/jsonresume/resume-schema#change-log) for the resume schema [repo](https://github.com/jsonresume/resume-schema).

Just because this is an official release of the specification, it doesn't guarantee that the ecosystem is stable. We actually had to wait for this official release before we could lock down parts of the ecosystem.

### How are we doing?

When JSON resume first went public, it was actually unexpected and the project wasn't quite as mature as we would have liked it to have been. In the days following the leak, the homepage received over 50,000 visitors and **a lot** of people reached out offering support. We worked overtime to get people hacking away at different areas of the project.

Some accomplishments so far

* Over 1400 stars on the [resume CLI](https://github.com/jsonresume/resume-cli)
* 97 issues created for the specification, [52 closed](https://github.com/jsonresume/resume-schema/issues?q=is%3Aissue+is%3Aclosed)
* Built a [modular theme system](https://github.com/jsonresume/theme-manager) leveraging NPM for version management
* Active [theme development](http://node-modules.com/search?q=jsonresume-theme-*) underway
* Progress made on [LinkedIn export](https://jmperezperez.com/linkedin-to-json-resume/)
* Build your `resume.json` with a GUI, coming in the next few days([screenshot](https://i.imgur.com/RYqIdUp.png))
* Organized a [standards committee](/team)
* Multiple HR related services are looking at supporting and potentially sponsoring the JSON resume project
* Officially listed JSON schema on [JSON Schema Store](https://schemastore.org/)

An obligatory thank you to everybody who has participated up to this point. And a very special thanks to [Mattias Erming](https://github.com/erming) who has put a lot of hard work into developing and brainstorming the future of JSON resume.

### Where are we heading?

After long discussions about the specification in the GitHub issues, we have come to settle on a few points.

* JSON resume exist to empower individuals to manage their job seeking profiles and this is our highest priority.
* Because there is no easily accessible alternative, we are going to maintain a casual approach to the project.
* The specification is not to be the perfect description of a person but instead a description of a resume where only things relevant in the context of hiring will be allowed in.

To guarantee the **success** of JSON resume, we will be aiming to integrate as an import/export option where ever possible. We want a thriving theme ecosystem and as many tools as possible.

Please leave your feedback and ideas below! Also, please join the movement!

By <a href="https://registry.jsonresume.org/thomasdavis">{{page.author}}</a>
and <a href="https://github.com/rolandnsharp">Roland Sharp</a>
