require 'rack/contrib/not_found'
require 'rack/contrib/try_static'

use Rack::Deflater

use Rack::TryStatic,
  root: "_site",
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html'],
  header_rules: [
    [["html"],  {'Content-Type' => 'text/html; charset=utf-8'}],
    [["css"],   {'Content-Type' => 'text/css'}],
    [["js"],    {'Content-Type' => 'text/javascript'}],
    [["png"],   {'Content-Type' => 'image/png'}],
    [["woff"],  {'Content-Type' => 'application/font-woff'}],
    [["eot"],  {'Content-Type' => 'application/vnd.ms-fontobject'}],
    [["ttf"],  {'Content-Type' => 'application/x-font-ttf'}],
    [["svg"],  {'Content-Type' => 'image/svg+xml'}],
    ["/assets", {'Cache-Control' => 'public, max-age=31536000'}]
  ]

run Rack::NotFound.new('_site/404.html')