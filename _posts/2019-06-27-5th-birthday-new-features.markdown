---
layout: post
title: "5th Birthday and New Features"
date: 2018-06-27 14:18:05
permalink: /blog/5th-birthday-new-features
---

It was our 5th birthday last week and we are happy to announce some new features. Development has been slow. In retrospect this is a good thing for something that purports to be a standard. We didn't make any radical changes which kept the ecosystem stable. The community still exists due to many members contributing above and beyond. We extend thanks to people have written themes, parsers, converters, tools and services. The website will soon showcase the plethora of projects built around JSON Resume.

The last year has been unstable when it came to the free hosting and themes server. Maintaining the servers cost and development has always been a thorn in our sides. We've finally managed to rewrite those servers into a much more manageable solution.

Hosting

Our new system leverages serverless hosting which means we don't have to SSH into our old box at 3am because of logs killing our disk space.

We've also deprecated our user/resume storage in favour of users storing their resumes as Gist on their own Github accounts.

You can take advantage of our new hosting

e.g. [https://registry.jsonresume.org/thomasdavis](https://registry.jsonresume.org/thomasdavis)

by simply creating a Gist on your Github with the filename being `resume.json`

e.g. [https://gist.github.com/thomasdavis/c9dcfa1b37dec07fb2ee7f36d7278105](https://gist.github.com/thomasdavis/c9dcfa1b37dec07fb2ee7f36d7278105)

That is all you need to do, and you can view your resume at

_https://registry.jsonresume.org/{your_github_username}_

To change the default theme, simply add a top level property to your `resume.json`

`{ "meta": { "theme": "kendall" } }"`

The theme server is whitelisted now meaning that only approved themes will work on the registry.

You can suggest one on our ongoing issue -> [https://github.com/jsonresume/theme-functions/issues/12](https://github.com/jsonresume/theme-functions/issues/12)

Gist are great;

- Versioned
- You won't lose your resume unless Github shuts down
- You can use their online editor for quick updates

A bunch of people have already migrated to the new system and we believe it to be a great step in the right direction.
