# JSON Resume Homepage

Visit the website at http://jsonresume.org/

## Development

If you want run the website locally, follow these instructions:


### Clone repository

You know the drill.

```
git clone http://github.com/jsonresume/homepage
```

### Install Jekyll

Lets install Ruby:

```
sudo apt-get install ruby1.9.3
```

`ruby` and `gem` should now have been installed on your computer.

Now go ahead and install Jekyll:

```
sudo gem install jekyll
```

_If the install fails due to `make` not found, install `build-essential` via apt-get and try again._

### Run local server

Step into the `homepage/` folder and run:

```
jekyll serve --watch
```

This will run the Jekyll server and watch for any file changes.

## License

Available under [the MIT license](http://mths.be/mit).
