(function ($) {


  var locations_list = ['Zharki', 'Gun Range', 'Severny', 'Stalber', 'Georgopol', 'Hospital', 'Ruins', 'Water Town', 'Rozhok', 'School', 'Yasnaya Polyana', 'Villa', 'Lipovka', 'Bunker', 'Pochinki', 'Gatka', 'Swamp Town', 'Primorski', 'West Bridge Coast', 'East Bridge Coast', 'Mylta', 'Sosnovka Military Base'];

  $('.header-wrap .btn-primary').on('click', function(e) {
    e.preventDefault();
    /** Load up variables here & display on page**/
    $('.header-wrap .checkbox input:checked').each(function() {
      var label = $(this).parent().find('.label-value').html();
      if (label.length > 0) {
        switch(label) {
          case "Location":
            break;
          case "Kill":
            break;
          case "Weapon":
            break;
          case "Gear":
            break;
          case "Hunger Games":
            break;
          default:
            break;
        }
      }
    });
  });


}(jQuery));
