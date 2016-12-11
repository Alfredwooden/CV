    $(document).ready(function() {
      $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        // sectionsColor: ['#4A6FB1', '#939FAA', '#323539'],
        menu: '#menu',
        continuousVertical: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
          scrollbars: true,
          mouseWheel: true,
          hideScrollbars: false,
          fadeScrollbars: false,
          disableMouse: true
        }

      });
    });