<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name') }}</title>
  <link rel="icon" href="{{ asset('img/favicon.png') }}">
  <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
  <link rel="stylesheet" href="{{ asset('css/animate.css') }}">
  <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
  <link rel="stylesheet" href="{{ asset('css/themify-icons.css') }}">
  <link rel="stylesheet" href="{{ asset('css/flaticon.css') }}">
  <link rel="stylesheet" href="{{ asset('css/magnific-popup.css') }}">
  <link rel="stylesheet" href="{{ asset('css/slick.css') }}">
  <link rel="stylesheet" href="{{ asset('css/loading.css') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
  <link rel="stylesheet" href="/css/style.css" id="css-file">
</head>
<body>
  <div id="app"></div>

  <script src="{{ mix('js/app.js') }}"></script>
  <script src="{{ asset('js/jquery-1.12.1.min.js') }}"></script>
  <script src="{{ asset('js/popper.min.js') }}"></script>
  <script src="{{ asset('js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('js/jquery.magnific-popup.js') }}"></script>
  <script src="{{ asset('js/swiper.min.js') }}"></script>
  <script src="{{ asset('js/masonry.pkgd.js') }}"></script>
  <script src="{{ asset('js/owl.carousel.min.js') }}"></script>
  <script src="{{ asset('js/jquery.nice-select.min.js') }}"></script>
  <script src="{{ asset('js/slick.min.js') }}"></script>
  <script src="{{ asset('js/jquery.counterup.min.js') }}"></script>
  <script src="{{ asset('js/waypoints.min.js') }}"></script>
  <script src="{{ asset('js/custom.js') }}"></script>
</body>
</html>