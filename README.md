# Samplecon

This is the home of www.samplecon.com. We use Jekyll to build a static site so its super fast and cacheable.

## Dependencies

Jekyll is built with ```ruby```, so you'll need to make sure you have a recent version of ruby installed on your machine.

You'll also need ```Bundler```: ```gem install bundler``` will do the trick.

Along with that, you'll want to get ```Jekyll```: ```gem install jekyll```

## Getting started

First, grab a copy of the repository for your local machine. You can create a ```fork``` or ```clone``` this repo.

Then run ```bundle install``` or simply ```bundle``` and it will grab everything the Gemfile specifies. Now you should be ready to go.

### Generating the site

Anytime you want to generate a new version of the site, whether it's your first time opening the repository, or if you've made changes to internal files, you'll need to rebuild the site. To do this, run in your terminal/console:

```jekyll build```

If you want to see your changes on your local machine, you can start a server:

```jekyll serve```

This command does the same thing as ```jekyll build``` but it also creates a local server on ```localhost:4000```.

Now, let's make it watch for changes to internal files and rebuild on the fly:

```jekyll serve --watch```

This last command will generate the site, put it on ```localhost:4000``` and anytime a file changes that isn't a config file, it will regenerate the site. You can simply refresh your browser to see the changes live.

### Assets

This specific jekyll build is using ```jekyll assets``` which is a lot like the Rails asset pipeline. It will take any files in the ```_assets``` directory, concatenate them, and minify them.

They are referenced in the layout like this:

```
{% stylesheet app %}
{% javascript vendor/modernizr %}
```

You include them in ```Liquid``` tags, name the type of asset (```javascript``` or ```stylesheet```), and then the file name without the extension. This project uses Sass's ```scss``` format for CSS.
