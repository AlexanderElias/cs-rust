
#[macro_use] extern crate nickel;

use nickel::{Nickel, HttpRouter, StaticFilesHandler, FaviconHandler, MediaType};
use std::collections::HashMap;


fn main() {

    //Implement A Server
    let mut server = Nickel::new();



    //Route Using Mustache Templateing Agent
    server.get("/", middleware! { |req, mut res|

        let mut data = HashMap::<&str, &str>::new();
        data.insert("tab-title","Verge");
        data.insert("title","<span style=\"margin-left: 28.9px; position: absolute; margin-top: 17px;vertical-align: middle; z-index: -1;\">V</span><span style=\"font-size: 145%; color: #C36159;vertical-align: middle;\">&#9678</span><span style=\"margin-left: -7px; vertical-align: middle;\">erge</span></h1>");
        data.insert("sub-title", "Web Development & Design");
        data.insert("hint","<div id=\"hint\">Use Arrow Keys<div>&#x276f;</div></div>");

        res.set(MediaType::Html);

        return res.render("views/index.html", &data);

    });

    server.get("/contact", middleware! { |req, res|

        let mut data = HashMap::<&str, &str>::new();
        data.insert("tab-title","Contact");
        data.insert("title","Contact");

        return res.render("views/contact.html", &data);
    });


    //Serve A Static Directory
    server.utilize(StaticFilesHandler::new("views/public/"));
    //server.utilize(FaviconHandler::new("/images/file"));



    server.listen("0.0.0.0:8080");
}
