
#[macro_use] extern crate nickel;

use nickel::{Nickel, HttpRouter, StaticFilesHandler};
use std::collections::HashMap;


fn main() {

    //Implement A Server
    let mut server = Nickel::new();


    //Route Using Mustache Templateing Agent
    server.get("/", middleware! { |req, res|

        let mut data = HashMap::<&str, &str>::new();
        data.insert("title","Verge");

        return res.render("views/index.html", &data);

    }).get("/contact", middleware!{ |req, res|

        let mut data = HashMap::<&str, &str>::new();
        data.insert("title","Contact");

        return res.render("views/contact.html", &data);
    });


    //Serve A Static Directory
    server.utilize(StaticFilesHandler::new("views/public/"));


    server.listen("0.0.0.0:8080");
}
