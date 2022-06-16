ns app.main

defn main! ()
  js/console.log $ js/JSON.stringify
    []
      js-object
        :a 2
        :b 3
