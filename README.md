# JSON Resume Website

Visit the website at https://jsonresume.org/

## Development

There are two ways to run this website, locally or inside a VM.

### Locally

Dependencies:

- Git

#### 1. Clone repository

```
git clone https://github.com/jsonresume/resume-website.git
```

#### 2. Install Jekyll

- Install RVM
- Install Ruby 2.7
- `bundle exec install`

#### 3. Run Jekyll

```
jekyll serve --watch
```

This will run the Jekyll server on port 4000 and watch for any file changes.

### VM

Dependencies:

- Vagrant
- VirtualBox

Simply run:

```
vagrant up
vagrant ssh
jekyll serve
```

Then open [http://localhost:4000/](http://localhost:4000/).

The initial provision will take some time.

**Note:** The `--watch` flag for Jekyll has issues inside the VM, see [Stack Overflow](https://stackoverflow.com/questions/19822319/jekyll-regeneration-doesnt-work-inside-vagrant) and [jekyll/jekyll#1763](https://github.com/jekyll/jekyll/issues/1763).

## Deploying

This repository is auto built using Github/Jekyll and deployed to `gh-pages` automagically.

Pull requests should be made to the `master` branch.

## License

Available under [the MIT license](https://opensource.org/licenses/mit-license.php).
