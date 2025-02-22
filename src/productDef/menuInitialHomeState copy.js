import { images } from "../constants";

const menuState = [
  {
    title: "pizzaMenu",
    menuSections: [
      {
        title: "Custom Pizza",
        description: null,
        id: "S0",
        type: "menuCarousel",
        menuCarousel: {
          leadCard: {
            type: "leadCarouselCard",
            title: "CREATE YOUR OWN PIZZA",
            description: " Get started with one of our signature crusts",
          },
          carouselCards: [
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name1",
                imageUrl: "name1Url.png",
              },
              title: "Original Crust",
              description:
                "Our signature dough. Fresh, never frozen. Made with 6 simple ingredients & hand-tossed.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name2",
                imageUrl: "name2Url.png",
              },
              title: "Crispy Parm Crust",
              description:
                "A layer of buttery, toasted parmesan cheese baked on the underside of our signature thin crust.",
              interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name3",
                imageUrl: "name3Url.png",
              },
              title: "Epic Stuffed Crust",
              description:
                "Our original dough stuffed with melty cheese and baked to a crispy, golden goodness.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name4",
                imageUrl: "name4Url.png",
              },
              title: "Epic Pepperoni-Stuffed Crust",
              description:
                "Our original fresh dough baked into a seasoned crust, hand-stuffed with pepperoni and cheese.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name5",
                imageUrl: "name5Url.png",
              },
              title: "NY Style Crust",
              description:
                "Hand-stretched, oversized, foldable slices with just the right balance of crust.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name6",
                imageUrl: "name6Url.png",
              },
              title: "Thin Crust",
              description:
                "Lighter than our Original Crust, and just a little bit crispy.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
            {
              type: "menuCarouselCard",
              image: {
                imageName: "Name7",
                imageUrl: "name7Url.png",
              },
              title: "Gluten-Free Crust",
              description:
                "Made with sorghum, teff, amaranth and quinoa. Not recommended for those with Celiac Disease.",
              interestFlag: { isDisplayed: false, text: null },
              buttonGroup: [
                {
                  buttonStyle: "dark",
                  buttonText: "Customize",
                  buttonFunction: "customizeFunction",
                },
              ],
            },
          ],
        },
      },
      {
        title: "PAPA PICKS",
        description: null,
        id: "S1",
        type: "productCards",
        productCards: [
          {
            title: "Pepperoni Pizza",
            cardType: "ProductCard",
            id: "11",
            image: {
              imageName: "card1",
              imageUrl: images.pizza,
            },
            price: 17.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "320 cal /slice, 8 slices",
            details: {
              text: "Detail",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S1F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S1F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S1F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S1F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Sausage Pizza",
            cardType: "ProductCard",
            id: "12",
            image: {
              imageName: "card2",
              imageUrl: images.pizza,
            },
            price: 17.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "330 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S1F4",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S1F5",
                isDisplayed: true,
                className:
                  "border-2 ml-3 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S1F6",
                isDisplayed: true,
                className:
                  "border-2 ml-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S1F7",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN02",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN03",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Cheese Pizza",
            cardType: "ProductCard",
            id: "13",
            image: {
              imageName: "card3",
              imageUrl: images.pizza,
            },
            price: 17.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "270 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S1F8",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S1F9",
                isDisplayed: true,
                className:
                  "border-2 ml-3 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S1F10",
                isDisplayed: true,
                className:
                  "border-2 ml-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S1F11",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN06",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN07",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "Current Special",
        description: null,
        id: "S2",
        type: "advertRowCard",
        advertRowCard: {
          image: {
            imageName: "advert1",
            imageUrl: "advert1Url.png",
          },
          title: "EPIC STUFFED CRUST PIZZA",
          price: 13.99,
          interestFlag: { isDisplayed: true, text: "Limited Time" },
          description:
            "Choose your topping. Cheese your crust. Epicness is now even easier. Indulge in your favorite 1-topping pizza now paired with a pillowy, cheese-filled crust.",
          details: {
            text: "Details",
            detailsUrl: "details1Url",
          },
          buttonGroup: [
            {
              id: "BTN08",
              buttonStyle: "dark",
              buttonText: "CUSTOMIZE",
              buttonFunction: "customizeFunction",
            },
          ],
        },
      },
      {
        title: "CRISPY PARM CRUST",
        description:
          "A layer of buttery, toasted parmesan cheese baked on the underside of our signature thin crust.",
        id: "S3",
        type: "advertCards",
        productCards: [
          {
            id: "s40",
            title: "CREATE YOUR OWN CRISPY PARM PIZZA",
            cardType: "FancierProductCard",
            price: 12.99,
            interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S1F11",
                isDisplayed: false,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S1F12",
                isDisplayed: false,
                className:
                  "border-2 ml-3 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S1F13",
                isDisplayed: false,
                className:
                  "border-2 ml-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S1F14",
                isDisplayed: false,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN09",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            id: "s41",
            title: "DELUXE CHEESE CRISPY PARM PIZZA",
            cardType: "FancierProductCard",
            price: 12.99,
            interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
            description:
              "Two melty cheeses atop alfredo and pizza sauces on our Crispy Parm Crust create layers of cheesy, crispy goodness. Finished with Italian Seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN10",
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN11",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "HANDCRAFTED SPECIALTIES",
        description: null,
        id: "S4",
        type: "productCards",
        productCards: [
          {
            id: "s40",
            title: "CREATE YOUR OWN CRISPY PARM PIZZA",
            cardType: "FancierProductCard",
            price: 12.99,
            interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S1F11",
                isDisplayed: false,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S1F12",
                isDisplayed: false,
                className:
                  "border-2 ml-3 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },

              {
                fieldName: "type",
                id: "S1F13",
                isDisplayed: false,
                className:
                  "border-2 ml-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S1F14",
                isDisplayed: false,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN09",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            id: "s41",
            title: "DELUXE CHEESE CRISPY PARM PIZZA",
            cardType: "FancierProductCard",
            price: 12.99,
            interestFlag: { isDisplayed: true, text: "LIMITED TIME" },
            description:
              "Two melty cheeses atop alfredo and pizza sauces on our Crispy Parm Crust create layers of cheesy, crispy goodness. Finished with Italian Seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN10",
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN11",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "The Works Pizza",
            cardType: "ProductCard",
            id: "12",
            image: {
              imageName: "card1",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "340 cal /slice, 8 slices",
            details: {
              text: "Detail",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "The Meats Pizza",
            cardType: "ProductCard",
            id: "13",
            image: {
              imageName: "card2",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "380 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Zesty Italian Trio Pizza",
            cardType: "ProductCard",
            id: "14",
            image: {
              imageName: "card3",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "370 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Super Hawaiian Pizza",
            cardType: "ProductCard",
            id: "15",
            image: {
              imageName: "card5",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "340 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Ultimate Pepperoni Pizza",
            cardType: "ProductCard",
            id: "16",
            image: {
              imageName: "card6",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "360 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "BBQ Chicken Bacon Pizza",
            cardType: "ProductCard",
            id: "17",
            image: {
              imageName: "card7",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "350 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Fiery Buffalo Chicken Pizza",
            cardType: "ProductCard",
            id: "18",
            image: {
              imageName: "card8",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "330 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Philly Cheesesteak Pizza",
            cardType: "ProductCard",
            id: "19",
            image: {
              imageName: "card9",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "360 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Pepperoni, Sausage & Six Cheese Pizza",
            cardType: "ProductCard",
            id: "20",
            image: {
              imageName: "card10",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "390 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S4F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S4F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S4F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S4F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "HANDCRAFTED MEATLESS SPECIALTIES",
        description: null,
        id: "S5",
        type: "productCards",
        productCards: [
          {
            title: "Extra Cheesy Alfredo Pizza",
            cardType: "ProductCard",
            id: "13",
            image: {
              imageName: "card1",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "320 cal /slice, 8 slices",
            details: {
              text: "Detail",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S6F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S6F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S6F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S6F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Fresh Spinach & Tomato Alfredo Pizza",
            cardType: "ProductCard",
            id: "14",
            image: {
              imageName: "card2",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "290 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S6F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S6F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S6F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S6F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Garden Fresh Pizza",
            cardType: "ProductCard",
            id: "15",
            image: {
              imageName: "card3",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "280 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S6F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S6F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S6F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S6F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Tuscan Six Cheese Pizza",
            cardType: "ProductCard",
            id: "16",
            image: {
              imageName: "card5",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "320 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S6F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S6F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S6F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S6F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "GLUTEN-FREE CRUST WITH ANCIENT GRAINS",
        description: null,
        id: "S6",
        type: "productCards",
        productCards: [
          {
            title: "Create Your Own Gluten-Free Crust",
            cardType: "ProductCard",
            id: "18",
            image: {
              imageName: "card1",
              imageUrl: images.pizza,
            },
            price: 12.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /slice, 6 slices",
            details: {
              text: "Detail",
              detailsUrl: "details1Url",
            },
            productCardForm: null,
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "LOCAL FLAVORS",
        description: null,
        id: "S7",
        type: "productCards",
        productCards: [
          {
            title: "Hawaiian BBQ Chicken Pizza",
            cardType: "ProductCard",
            id: "30",
            image: {
              imageName: "card1",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "360 cal /slice, 8 slices",
            details: {
              text: "Detail",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S8F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S8F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S8F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S8F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "White Garden Pizza",
            cardType: "ProductCard",
            id: "31",
            image: {
              imageName: "card2",
              imageUrl: images.pizza,
            },
            price: 19.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "300 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: [
              {
                fieldName: "size",
                id: "S8F0",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72",
                value: "Large",
                options: [
                  { key: "small", value: "Small" },
                  { key: "medium", value: "Medium" },
                  { key: "large", value: "Large" },
                  { key: "extraLarge", value: "Extra Large" },
                ],
              },
              {
                fieldName: "quantity",
                id: "S8F1",
                isDisplayed: true,
                className:
                  "border-2 mx-2 mt-3 mb-1 px-2 py-3 rounded-lg text-xl border-gray-300 w-14",
                value: 1,
                options: [
                  { key: "1", value: 1 },
                  { key: "2", value: 2 },
                  { key: "3", value: 3 },
                  { key: "4", value: 4 },
                  { key: "5", value: 5 },
                  { key: "6", value: 6 },
                  { key: "7", value: 7 },
                  { key: "8", value: 8 },
                  { key: "9", value: 9 },
                  { key: "10", value: 10 },
                  { key: "11", value: 11 },
                  { key: "12", value: 12 },
                  { key: "13", value: 13 },
                  { key: "14", value: 14 },
                  { key: "15", value: 15 },
                  { key: "16", value: 16 },
                  { key: "17", value: 17 },
                  { key: "18", value: 18 },
                  { key: "19", value: 19 },
                  { key: "20", value: 20 },
                  { key: "21", value: 21 },
                  { key: "22", value: 22 },
                  { key: "23", value: 23 },
                  { key: "24", value: 24 },
                  { key: "25", value: 25 },
                  { key: "26", value: 26 },
                  { key: "27", value: 27 },
                  { key: "28", value: 28 },
                  { key: "29", value: 29 },
                  { key: "30", value: 30 },
                  { key: "31", value: 31 },
                  { key: "32", value: 32 },
                  { key: "33", value: 33 },
                  { key: "34", value: 34 },
                  { key: "35", value: 35 },
                  { key: "36", value: 36 },
                  { key: "37", value: 37 },
                  { key: "38", value: 38 },
                  { key: "39", value: 39 },
                  { key: "40", value: 40 },
                  { key: "41", value: 41 },
                  { key: "42", value: 42 },
                  { key: "43", value: 43 },
                  { key: "44", value: 44 },
                  { key: "45", value: 45 },
                  { key: "46", value: 46 },
                  { key: "47", value: 47 },
                  { key: "48", value: 48 },
                  { key: "49", value: 49 },
                  { key: "50", value: 50 },
                ],
              },
              {
                fieldName: "type",
                id: "S8F2",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Original Crust",
                options: [
                  { key: "original", value: "Original Crust" },
                  { key: "crispyParm", value: "Crispy Parm Crust" },
                  { key: "epicStuffed", value: "Epic Stuffed Crust" },
                  {
                    key: "epicPepperoniStuffed",
                    value: "Epic Pepperoni-Stuffed Crust",
                  },
                  { key: "nyStyle", value: "NY Style Crust" },
                  { key: "thin", value: "Thin Crust" },
                  { key: "glutenFree", value: "Gluten-Free Crust" },
                ],
              },
              {
                fieldName: "flavor",
                id: "S8F3",
                isDisplayed: true,
                className:
                  "border-2 mx-2 my-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-360",
                value: "Add Crust Flavor",
                options: [
                  { key: "none", value: "None" },
                  {
                    key: "garlicParmesanCheese",
                    value: "Garlic Parmesan Cheese",
                  },
                ],
              },
            ],
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "papaBowlsMenu",
    menuSections: [
      {
        title: "PAPA BOWLS",
        description: null,
        id: "MP1S0",
        type: "advertCards",
        productCards: [
          {
            id: "S00",
            title: "ITALIAN MEATS TRIO PAPA BOWL",
            cardType: "FancierProductCard",
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description:
              "Pepperoni, sausage, meatballs, and veggies topped with three cheeses and Italian seasoning, baked to perfection in our signature pizza sauce.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: null,
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "customizeFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            id: "S01",
            title: "GARDEN VEGGIE PAPA BOWL",
            cardType: "FancierProductCard",
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description:
              "Spinach, mushrooms, onions, green peppers, tomatoes, and banana peppers baked in a bowl with our original sauce, cheese, and Italian seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: null,
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "customizeFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            id: "S02",
            title: "CHICKEN ALFREDO PAPA BOWL",
            cardType: "FancierProductCard",
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description:
              "Creamy alfredo, grilled chicken, and crisp veggies baked in a bowl with three cheeses and finished with Italian seasoning.",
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: null,
            image: {
              imageName: "advert1",
              imageUrl: images.pizza,
            },
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "customizeFunction",
              },
              {
                id: "BTN01",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Create Your Own Papa Bowl",
            cardType: "ProductCard",
            id: "MP1S04",
            image: {
              imageName: "card1",
              imageUrl: images.pizza,
            },
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Detail",
              detailsUrl: "details1Url",
            },
            productCardForm: null,
            buttonGroup: [
              {
                id: "BTN00",
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "papadiasMenu",
    menuSections: [
      {
        title: "PARMESAN CRUSTED PAPADIAS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Parmesan Crusted Create Your Own Papadia",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: null,
              detailsUrl: null,
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Parmesan Crusted Philly Cheesesteak Papadia",
            image: {
              imageName: "card2",
              imageUrl: "card1Ur2.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "930 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Special Garlic Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Parmesan Crusted BBQ Chicken & Bacon Papadia",
            image: {
              imageName: "card3",
              imageUrl: "card1Ur3.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "960 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Barbeque Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Parmesan Crusted Grilled Buffalo Chicken Papadia",
            image: {
              imageName: "card4",
              imageUrl: "card1Ur4.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,050 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Parmesan Crusted Meatball Pepperoni Papadia",
            image: {
              imageName: "card5",
              imageUrl: "card1Ur5.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,060 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Parmesan Crusted Italian Papadia",
            image: {
              imageName: "card6",
              imageUrl: "card1Ur6.png",
            },
            price: 8.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,070 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
      {
        title: "PAPADIAS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Create Your Own Papadia",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: null,
              detailsUrl: null,
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Philly Cheesesteak Papadia",
            image: {
              imageName: "card2",
              imageUrl: "card1Ur2.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "800 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Special Garlic Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "BBQ Chicken & Bacon Papadia",
            image: {
              imageName: "card3",
              imageUrl: "card1Ur3.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "830 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Barbeque Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Grilled Buffalo Chicken Papadia",
            image: {
              imageName: "card4",
              imageUrl: "card1Ur4.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "910 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: false,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Meatball Pepperoni Papadia",
            image: {
              imageName: "card5",
              imageUrl: "card1Ur5.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "990 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
          {
            title: "Italian Papadia",
            image: {
              imageName: "card6",
              imageUrl: "card1Ur6.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "940 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Crusted Papadia",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
              {
                buttonStyle: "light",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "papaBitesMenu",
    menuSections: [
      {
        title: "PAPA BITES",
        description:
          "Eight tasty pop-able morsels can be enjoyed in three exciting NEW flavors:",
        type: "advertRowCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            image: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "OREO® COOKIE PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Cream Cheese Icing",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            image: {
              imageName: "advert2",
              imageUrl: "advert1Ur2.png",
            },
            title: "CHICKEN PARMESAN PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            image: {
              imageName: "advert2",
              imageUrl: "advert1Ur2.png",
            },
            title: "JALAPEÑO PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW RECIPE" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "Create Your Own Papa Bowl",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 8.49,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: null,
              detailsUrl: null,
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "CUSTOMIZE",
                buttonFunction: "customizeFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "wingsMenu",
    menuSections: [
      {
        title: "PAPA WINGS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Unsauced Roasted Wings",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "810 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Hot Lemon Pepper Wings",
            image: {
              imageName: "card2",
              imageUrl: "card1Ur2.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: true, text: "NEW FLAVOR" },
            description: "960 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Parmesan Wings",
            image: {
              imageName: "card3",
              imageUrl: "card1Ur3.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,040 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Buffalo Wings",
            image: {
              imageName: "card4",
              imageUrl: "card1Ur4.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "840 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "BBQ Wings",
            image: {
              imageName: "card5",
              imageUrl: "card1Ur5.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "880 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Honey Chipotle Wings",
            image: {
              imageName: "card6",
              imageUrl: "card1Ur6.png",
            },
            price: 12.0,
            interestFlag: { isDisplayed: false, text: null },
            description: "900 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "8 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: true,
                value: "Normal Bake",
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
      {
        title: "PAPA POPPERS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Chicken Poppers",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "530 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Hot Lemon Pepper Chicken Poppers",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: true, text: "NEW FLAVOR" },
            description: "690 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Buffalo Chicken Poppers",
            image: {
              imageName: "card3",
              imageUrl: "card3UrL.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "590 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Buffalo Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "BBQ Chicken Poppers",
            image: {
              imageName: "card4",
              imageUrl: "card4UrL.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "590 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Barbeque Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Honey Chipotle Chicken Poppers",
            image: {
              imageName: "card5",
              imageUrl: "card5UrL.png",
            },
            price: 9.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "650 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "10 Piece",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Special Garlic Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "sidesMenu",
    menuSections: [
      {
        title: "PAPA STARTERS",
        description: null,
        type: "advertRowCard, productCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            image: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "CHICKEN PARMESAN PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            type: "advertRowCard",
            image: {
              imageName: "advert2",
              imageUrl: "advert2Url.png",
            },
            title: "JALAPEÑO PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW RECIPE" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "Pepperoni Rolls",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 7.0,
            interestFlag: { isDisplayed: true, text: "NEW!" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Pepperoni Rolls",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Knots",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /knot, 8 knots",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Garlic Knots",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Original Breadsticks",
            image: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 7.29,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /stick, 10 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Original Breadsticks",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Parmesan Breadsticks",
            image: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 7.59,
            interestFlag: { isDisplayed: false, text: null },
            description: "170 cal /stick, 10 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Garlic Parmesan Breadsticks",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Cheesesticks",
            image: {
              imageName: "card5",
              imageUrl: "card5Url.png",
            },
            price: 7.99,
            interestFlag: { isDisplayed: false, text: null },
            description: "90 cal /stick, 14 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 10inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Bacon Cheesesticks",
            image: {
              imageName: "card6",
              imageUrl: "card6Url.png",
            },
            price: 7.99,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /stick, 14 stick",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 10inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Tuscan 6-Cheese Cheesestick",
            image: {
              imageName: "card7",
              imageUrl: "card7Url.png",
            },
            price: 8.99,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /stick, 14 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Six Cheese Cheesesticks 10",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Jalapeño Cheesesticks",
            image: {
              imageName: "card8",
              imageUrl: "card8Url.png",
            },
            price: 11.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "110 cal /stick, 16 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 12inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Ranch Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Jalapeño Bacon",
            image: {
              imageName: "card8",
              imageUrl: "card8Url.png",
            },
            price: 11.5,
            interestFlag: { isDisplayed: false, text: null },
            description: " 130 cal /stick, 16 sticks",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheesesticks 12inch",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "dessertsMenu",
    menuSections: [
      {
        title: "DESSERTS",
        description: null,
        type: "advertRowCard, productCard",
        adverRowCards: [
          {
            type: "advertRowCard",
            image: {
              imageName: "advert1",
              imageUrl: "advert1Url.png",
            },
            title: "OREO® COOKIE PAPA BITES",
            price: 6.29,
            interestFlag: { isDisplayed: true, text: "NEW" },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "details1Url",
            },
            productCardForm: {
              size: {
                isDisplayed: false,
                value: null,
              },
              quantity: {
                isDisplayed: false,
                value: null,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Cream Cheese Icing",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "light",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
        productCards: [
          {
            title: "Cinnamon Pull Aparts",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "1,960 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cinnamon Pull Apart",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Chocolate Chip Cookie",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "190 cal /slice, 8 slices",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Choclate Chip Cookie",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Double Choclate Chip Brownie",
            image: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 7.5,
            interestFlag: { isDisplayed: false, text: null },
            description: "240 cal /square, 9 squares",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Double Choclate Chip Brownie",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: true,
                value: "Pizza Sauce",
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "drinksMenu",
    menuSections: [
      {
        title: "ICE COLD PEPSI BEVERAGES",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Pepsi",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Mountain Dew",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "170 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Mountain Dew",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Diet Pepsi",
            image: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Aquafina",
            image: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 2.39,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Aquafina",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Starry",
            image: {
              imageName: "card5",
              imageUrl: "card5Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Starry",
            image: {
              imageName: "card6",
              imageUrl: "card6Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "195 cal /12 oz",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Orange Crush",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "extrasMenu",
    menuSections: [
      {
        title: "DIPPING SAUCES",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Special Garlic Sauce",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Special Garlic Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Spicy Garlic Sauce",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 3.49,
            interestFlag: { isDisplayed: false, text: null },
            description: "153 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Spicy Garlic Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Pizza Sauce",
            image: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "20 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "2-Liter",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Ranch Sauce",
            image: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "100 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Ranch Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Blue Cheese Sauce",
            image: {
              imageName: "card5",
              imageUrl: "card5Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "160 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Blue Cheese Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Honey Mustard Sauce",
            image: {
              imageName: "card6",
              imageUrl: "card6Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Honey Mustard Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Buffalo Spicy Sauce",
            image: {
              imageName: "card7",
              imageUrl: "card7Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "15 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Buffalo Spicy Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Barbeque Sauce",
            image: {
              imageName: "card8",
              imageUrl: "card8Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "45 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Barbeque Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Garlic Parmesan Sauce",
            image: {
              imageName: "card9",
              imageUrl: "card9Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "220 cal/cup",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Garlic Parm Cup",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Cheese Sauce",
            image: {
              imageName: "card10",
              imageUrl: "card10Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "40 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cheese Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Cream Cheese Icing",
            image: {
              imageName: "card11",
              imageUrl: "card11Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "150 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Cream Cheese Icing Dipping Sauce",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
      {
        title: "SEASONING PACKETS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Special Seasonings",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 0.3,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Seasoning Shaker",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Crushed Red Pepper",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 0.3,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Crushed Red Pepper Shaker",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Parmesan Cheese",
            image: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 0.3,
            interestFlag: { isDisplayed: false, text: null },
            description: "15 cal",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Parmesan Cheese Shaker",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
      {
        title: "EXTRAS",
        description: null,
        type: "productCard",
        productCards: [
          {
            title: "Pepperoncinis",
            image: {
              imageName: "card1",
              imageUrl: "card1Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: null,
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Pepperoncinis Peppers",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Jalapeño Peppers",
            image: {
              imageName: "card2",
              imageUrl: "card2Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal /each",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Jalapeno Peppers",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Banana Peppers",
            image: {
              imageName: "card3",
              imageUrl: "card3Url.png",
            },
            price: 0.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "5 cal /each",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Banana Peppers",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
          {
            title: "Anchovies",
            image: {
              imageName: "card4",
              imageUrl: "card4Url.png",
            },
            price: 1.75,
            interestFlag: { isDisplayed: false, text: null },
            description: "30 cal /each",
            details: {
              text: "Details",
              detailsUrl: "detailsUrl",
            },
            productCardForm: {
              size: {
                isDisplayed: true,
                value: "Anchovies",
              },
              quantity: {
                isDisplayed: true,
                value: 1,
              },
              type: {
                isDisplayed: false,
                value: null,
              },
              flavor: {
                isDisplayed: false,
                value: null,
              },
            },
            buttonGroup: [
              {
                buttonStyle: "dark",
                buttonText: "ADD TO ORDER",
                buttonFunction: "addToOrderFunction",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menuState;
