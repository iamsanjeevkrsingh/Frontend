1) Create a simple hello world program using html.
   create a same hello world program using javascript.
   same hello world program using react js.

2) What is cdn?
 CDN stands for content delivery network.

 why do we need cdn?
 If our server is present in india and some other continent user trying to access it so it will take more time to fetch the page from server and render it in browser. so latency will hamper for different continent user that's why cdn comes into the picture.

 CDN -> CDN takes the server and host it in different different globle so that other continent access it very fast.

 It increase the speed of our website.
 It comes with privacy and lot more.

 3) How to use react in our project
 -> 1) using cdn create a hello world project.
  

  const heading = React.createElement("h1", {
   id: 'heading', className: 'test', xyz: 'abc'
  }, "Hello world");
  {} => you can use to give the attributes for a particular tag.

  console.log(heading);
  {
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "heading",
        "className": "test",
        "children": "Hello world from react!",
        "xyz": "abc"
    },
    "_owner": null,
    "_store": {}
   }

   props -> props are children and attributes we are passing.

   root.render(heading);

   render -> It takes the object create the h1 tag which browser understand and put that element inside the root element.

 4) What is crossorigin?