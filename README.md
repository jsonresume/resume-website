# JSON Resume Homepage

[![Join the chat at https://gitter.im/jsonresume/public](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsonresume/public?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Visit the website at http://jsonresume.org/

## Development

There are two ways to run this website, locally or inside a VM.

### Locally

Dependencies:

- Git
- Debian-based OS (e.g. Ubuntu)

#### 1. Clone repository

```
git clone http://github.com/jsonresume/homepage
```

#### 2. Install Jekyll

Start by installing this stuff:

```
sudo apt-get install ruby ruby-dev make
```

`ruby` and `gem` should now have been installed on your computer.

Now go ahead and install Jekyll:

```
sudo gem install jekyll --no-rdoc --no-ri
```

#### 3. Run Jekyll

Step into the `homepage/` folder and run:

```
jekyll serve --watch
```

This will run the Jekyll server and watch for any file changes.

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

## Resources

Installing Jekyll on Ubuntu:
http://michaelchelen.net/81fa/install-jekyll-2-ubuntu-14-04/

## License

Available under [the MIT license](http://mths.be/mit).
