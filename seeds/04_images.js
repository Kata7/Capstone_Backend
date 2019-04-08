
exports.seed = function(knex, Promise) {
  const table = "images"
  return knex(table).del()
    .then(function () {
      return knex(table).insert([
      // id (int)
      // restaurant_id (int)
      // url (text)

      // Tables
      {
        restaurant_id: 1,
        url: "https://static1.squarespace.com/static/568dcd1e2399a316b9697bc6/56a2616122482ece9197490f/56a261625827c3f65838bfc5/1453482338648/2014-01-22_1390424075.jpg"
      },
      {
        restaurant_id: 1,
        url: "https://ot-foodspotting-production.s3.amazonaws.com/reviews/166319/thumb_600.jpeg"
      },
      {
        restaurant_id: 1,
        url: "http://www.fluxmagazine.com/wp-content/uploads/2015/06/CAU-Web-5.jpg"
      },
      {
        restaurant_id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPeoVVHUo4DpTZae0senF7EuwfxLs58pSE8URrKa18pheA1pA"
      },
      {
        restaurant_id: 1,
        url: "https://images1.westword.com/imager/u/745x420/10524051/tablesburger.jpg"
      },
      // Root Down
      {
        restaurant_id: 2,
        url: "https://injohnnaskitchen.com/wp-content/uploads/2016/03/rootdowndenver006-640x423.jpg"
      },
      {
        restaurant_id: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfwKM7GhKd8nF9GciojSrSQMXu9BWrlMML5Keq9v8b6Sk6VYWiw"
      },
      {
        restaurant_id: 2,
        url: "http://www.rootdownfoodtruck.com/s/cc_images/teaserbox_4096590936.jpg?t=1450065660"
      },
      {
        restaurant_id: 2,
        url: "https://media-cdn.tripadvisor.com/media/photo-s/02/61/a6/40/butternut-ricotta-gnocchi.jpg"
      },
      {
        restaurant_id: 2,
        url: "https://denverlifemagazine.com/wp-content/uploads/2015/01/Root_Down-Roman_Gnocchi-2164-e1440625026696.png"
      },
      // 3 - Ambli Mexico
      {
        restaurant_id: 3,
        url: "https://s.hdnux.com/photos/73/52/17/15639509/3/920x920.jpg"
      },
      {
        restaurant_id: 3,
        url: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/02/1484241389-beef-and-avocado-quesadillasp1.jpg"
      },
      {
        restaurant_id: 3,
        url: "https://static1.squarespace.com/static/5475c689e4b05a135b085d65/t/5c50edff70a6ad41a0237dd0/1548807738880/Mexican%2BFood%2BTours%2BMexico%2BCity%2Btacos.jpg"
      },
      {
        restaurant_id: 3,
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-enchilada-chicken-pinterest-still001-1533073454.jpg?crop=1xw:1xh;center,top&resize=480:*"
      },
      {
        restaurant_id: 3,
        url: "https://cdn.vox-cdn.com/thumbor/0c1Mmb4glZ9CjRU4N_tbsuhYCqg=/0x0:750x500/1200x900/filters:focal(315x190:435x310)/cdn.vox-cdn.com/uploads/chorus_image/image/59012905/noanoa.0.png"
      },
      // 4 - Izakaya Den
      {
        restaurant_id: 4,
        url: "https://media-cdn.tripadvisor.com/media/photo-s/08/66/6f/2a/koto-japanese-steakhouse.jpg"
      },
      {
        restaurant_id: 4,
        url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/9a/7c/17/very-filling-steak-and.jpg"
      },
      {
        restaurant_id: 4,
        url: "http://www.ironchefsteakhouse.com/img/carousel/Food3-A%20Sign.jpg"
      },
      {
        restaurant_id: 4,
        url: "https://s3-media3.fl.yelpcdn.com/bphoto/j97nNxDOEsBmvsTcOJcreA/348s.jpg"
      },
      {
        restaurant_id: 4,
        url: "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4655589/thumb_600.jpg"
      },
      // 5 - Snooze AM
      {
        restaurant_id: 5,
        url: "https://static1.squarespace.com/static/53d65f4ae4b009befdb8b40f/t/5b5cc73b2b6a2840031b7710/1532807031789/New+York+Diner+Breakfast+%28enhanced%29.jpg"
      },
      {
        restaurant_id: 5,
        url: "https://www.paleorunningmomma.com/wp-content/uploads/2018/09/italian-breakfast-casserole-14.jpg"
      },
      {
        restaurant_id: 5,
        url: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Loaded-Breakfast-Potatoes_EXPS_CIMZ17_73363_B07_19_4b.jpg"
      },
      {
        restaurant_id: 5,
        url: "https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/breakfast_breakfast-classics_big-two-do-breakfast.jpg"
      },
      {
        restaurant_id: 5,
        url: "https://olo-images-live.imgix.net/95/9516a55a242d4876b99cb36eb5fd2e31.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=860&h=484&fit=fill&bg=%23fff&s=b1110fc9a4756ae82d6db5cf00663c07"
      },
      // 6 - Park Burger
      {
        restaurant_id: 6,
        url: "https://www.traegergrills.com/images/en-us/Shared/images/recipes/banners/Beef/20180811_Smoked-Whiskey-Burger_RE_HE_M"
      },
      {
        restaurant_id: 6,
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burgerbear-077-1515519914.jpg"
      },
      {
        restaurant_id: 6,
        url: "https://assets.epicurious.com/photos/5580664481ac1e502367643f/2:1/w_1260%2Ch_630/56389654_double-rl-ranch-burger_1x1.jpg"
      },
      {
        restaurant_id: 6,
        url: "https://qpr2l7.imagenii.com/static1.verbinet.com/image_uploader/photos/bc/large/finding-the-best-burgers-in-verbier-verbier-valley.jpg?f=q(v=.8)&auth=f4393dcba1dda336f954853c6fc1c727ca1fd7e6"
      },
      {
        restaurant_id: 6,
        url: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Gruyere-and-Egg-Burgers_EXPS_THAM18_192202_B12_12_1b-1.jpg"
      },
      // 7 - Sushi Den
      {
        restaurant_id: 7,
        url: "https://img.grouponcdn.com/bynder/Ri5HEhJFF4o6PFz5WCG2rrSNN4A/Ri-2048x1229/v1/c700x420.jpg"
      },
      {
        restaurant_id: 7,
        url: "https://assets3.thrillist.com/v1/image/1559020/size/tmg-slideshow_l.jpg"
      },
      {
        restaurant_id: 7,
        url: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Ffw%2F13%2Fkorean-sushi-rolls-fw-x.jpg%3Fitok%3DcNmNOLCS&w=450&c=sc&poi=face&q=85"
      },
      {
        restaurant_id: 7,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKU8A2GTJzkIVa-8dxhG9Pxqwj8yrVrwZ2eUfNKutjl6gVoJA6"
      },
      {
        restaurant_id: 7,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg"
      },
      // 8 - Highland Tap
      {
        restaurant_id: 8,
        url: "https://static01.nyt.com/images/2014/04/18/dining/salmonburger2/salmonburger-superJumbo.jpg"
      },
      {
        restaurant_id: 8,
        url: "https://static01.nyt.com/images/2016/04/18/dining/18COOKING-MCBITTYBEANBURGERS2/18COOKING-MCBITTYBEANBURGERS2-videoSixteenByNineJumbo1600.jpg"
      },
      {
        restaurant_id: 8,
        url: "https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg"
      },
      {
        restaurant_id: 8,
        url: "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"
      },
      {
        restaurant_id: 8,
        url: "https://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1-1500x1125.jpg"
      },
      // 9 - Maci's Cafe
      {
        restaurant_id: 9,
        url: "https://www.bowlofdelicious.com/wp-content/uploads/2017/09/Ham-Apple-and-Swiss-Paninis-square-2.jpg"
      },
      {
        restaurant_id: 9,
        url: "https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2016/10/main/turkey-panini-2484301.jpg?itok=U0X_FJjU"
      },
      {
        restaurant_id: 9,
        url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/9/0/JE0310H_Royal-Beef-Tenderloin-Panini_s4x3.jpg.rend.hgtvcom.826.620.suffix/1512876150427.jpeg"
      },
      {
        restaurant_id: 9,
        url: "https://d1bjorv296jxfn.cloudfront.net/s3fs-public/recipe-images/sargento/1446-Provolone-Panini-with-Prosciutto.jpg"
      },
      {
        restaurant_id: 9,
        url: "https://feelgoodfoodie.net/wp-content/uploads/2017/08/Pesto-Chicken-Avocado-Panini-1.jpg"
      },
      // 10 - Columbine Steak House
      {
        restaurant_id: 10,
        url: "http://www.aspicyperspective.com/wp-content/uploads/2018/06/Best-Homemade-Steak-Seasoning-118.jpg"
      },
      {
        restaurant_id: 10,
        url: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/07/e3ce4eb1741bd76cc083424453c0e3f39d147f9b.jpeg"
      },
      {
        restaurant_id: 10,
        url: "https://www.jessicagavin.com/wp-content/uploads/2018/06/how-to-reverse-sear-a-steak-11.jpg"
      },
      {
        restaurant_id: 10,
        url: "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg"
      },
      {
        restaurant_id: 10,
        url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/1/2/0/valentines_steak.jpg.rend.hgtvcom.616.462.suffix/1385127027449.jpeg"
      }
      ]);
    });
};
