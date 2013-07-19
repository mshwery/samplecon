module Jekyll
  class StripTag < Liquid::Block

    def render(context)
      super.gsub /[^0-9a-z]/i, ""
    end

  end
end

Liquid::Template.register_tag('strip', Jekyll::StripTag)