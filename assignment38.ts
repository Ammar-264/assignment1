function describe_city(city, country = 'unknown') {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('karachi', 'pakistan');
  describe_city('manama');
  describe_city('dubai', 'Uae');