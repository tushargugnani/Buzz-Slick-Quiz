// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "main":    "",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  {"title": "Cooking", "descShort":"STIRRING IT UP!", "descLong":"Break out your apron and cookbook and take a shot at preparing your favorite meal. Better yet, try a brand new recipe!", image: "Cooking.jpg"},
        "level2":  {"title": "Travel", "descShort":"HITTING THE ROAD!", "descLong":"Here, there, everywhere! There are sights to be seen all across the country. Take a shot at planning the trip of your dreams or visiting an inspiring national monument! ", image: "Travel.jpg"},
        "level3":  {"title": "Outdoors", "descShort":"ENJOYING THE GREAT OUTDOORS!", "descLong":"Lace up your sneakers and head outside. Take a shot at enjoying the seasonal foliage or gazing at the stars.", image: "Outdoors.jpg"},
        "level4":  {"title": "Music", "descShort":"ENJOYING SOME NEW TUNES!",  "descLong":"Music is food for the soul. Take a shot at browsing your local record store or catching a live performance of your favorite musical act!", image: "Music.jpg"},
        "level5":  {"title": "Art", "descShort":"UNLEASHING YOUR CREATIVITY!",  "descLong":"It’s fun to create, learn, and grow. Whether it’s poetry, painting, or exploring an art museum, take a shot at taking in new and exciting culture!", image: "Art.jpg"} // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "WHERE WOULD YOU SPEND AN IDEAL AFTERNOON OF RELAXATION?",
            "a": [
                {"option": "Lake",      "correct": true, "value":"3", "image": "quiz-thumbimg-relaxation1.jpg"},
                {"option": "City park",     "correct": true, "value":"4", "image": "quiz-thumbimg-relaxation2.jpg"},
                {"option": "Café",      "correct": true, "value":"2", "image": "quiz-thumbimg-relaxation3.jpg"},
				{"option": "Kitchen",      "correct": true, "value":"5", "image": "quiz-thumbimg-relaxation4.jpg"},
                {"option": "Movies",     "correct": true, "value":"2", "image": "quiz-thumbimg-relaxation5.jpg"},
				{"option": "Movies",     "correct": true, "value":"1", "image": "quiz-thumbimg-relaxation6.jpg"} // no comma here
            ],
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "IF YOU WERE A PAIR OF SHOES, WHAT KIND WOULD YOU BE?  ",
            "a": [
                {"option": "Heels", "correct": true, "value":"1", "image": "quiz-thumbimg-pair1.jpg"},
                {"option": "Work boots", "correct": true, "value":"3", "image": "quiz-thumbimg-pair2.jpg"},
                {"option": "Golf shoes", "correct": true, "value":"3", "image": "quiz-thumbimg-pair3.jpg"},
                {"option": "Flip-flops", "correct": true, "value":"4", "image": "quiz-thumbimg-pair4.jpg"},
				{"option": "Slippers", "correct": true, "value":"5", "image": "quiz-thumbimg-pair5.jpg"},
				{"option": "Clown shoes", "correct": true, "value":"2", "image": "quiz-thumbimg-pair6.jpg"} // no comma here
            ],
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "YOU JUST WON $100 ON A SCRATCH-OFF. WHAT DO YOU DO WITH IT?",
            "a": [
                {"option": "Donate to charity",           "correct": true, "value":"4", "image": "quiz-thumbimg-scratch1.jpg"},
                {"option": "Redecorate",                  "correct": true, "value":"1", "image": "quiz-thumbimg-scratch2.jpg"},
                {"option": "Invest",  "correct": true, "value":"4", "image": "quiz-thumbimg-scratch3.jpg"},
                {"option": "Go to a concert",          "correct": true, "value":"2", "image": "quiz-thumbimg-scratch4.jpg"},
				{"option": "Travel",  "correct": true, "value":"3", "image": "quiz-thumbimg-scratch5.jpg"},	
				{"option": "Buy books",          "correct": true, "value":"5", "image": "quiz-thumbimg-scratch6.jpg"}// no comma here
            ],

        },
        { // Question 4
            "q": "WHAT WOULD BE YOUR DREAM HOME?",
            "a": [
                {"option": "Luxury apartment",    "correct": true, "value":"1", "image": "quiz-thumbimg-dream1.jpg"},
                {"option": "Beach house",     "correct": true, "value":"4", "image": "quiz-thumbimg-dream2.jpg"},
                {"option": "Log cabin in woods",      "correct": true, "value":"3", "image": "quiz-thumbimg-dream3.jpg"},
				{"option": "Tent",      "correct": true, "value":"2", "image": "quiz-thumbimg-dream4.jpg"},
                {"option": "Ranch",   "correct": true, "value":"5", "image": "quiz-thumbimg-dream5.jpg"},
				{"option": "Studio",   "correct": true, "value":"1", "image": "quiz-thumbimg-dream6.jpg"} // no comma here
            ],
        },
        { // Question 5
            "q": "IF YOU COULD PURSUE ANY CAREER, WHAT WOULD IT BE?",
            "a": [
                {"option": "Teacher",    "correct": true, "value":"4", "image": "quiz-thumbimg-career1.jpg"},
				{"option": "Actor",    "correct": true, "value":"2", "image": "quiz-thumbimg-career2.jpg"},
				{"option": "Baker",    "correct": true, "value":"5", "image": "quiz-thumbimg-career3.jpg"},
				{"option": "Artist",    "correct": true, "value":"1", "image": "quiz-thumbimg-career4.jpg"},
				{"option": "Mayor",    "correct": true, "value":"4", "image": "quiz-thumbimg-career5.jpg"},
                {"option": "Park ranger",     "correct": true, "value":"3", "image": "quiz-thumbimg-career6.jpg"} // no comma here
            ],

        },
		{ // Question 6
            "q": "WHICH HOLIDAY DO YOU LOOK FORWARD TO THE MOST?",
            "a": [
                {"option": "New Year’s Eve",    "correct": true, "value":"2", "image": "quiz-thumbimg-holiday1.jpg"},
				{"option": "Fourth of July",    "correct": true, "value":"3", "image": "quiz-thumbimg-holiday2.jpg"},
				{"option": "Halloween",    "correct": true, "value":"1", "image": "quiz-thumbimg-holiday3.jpg"},
				{"option": "Thanksgiving",    "correct": true, "value":"5", "image": "quiz-thumbimg-holiday4.jpg"},
				{"option": "Valentine’s Day",    "correct": true, "value":"5", "image": "quiz-thumbimg-holiday5.jpg"},
                {"option": "Labor Day",     "correct": true, "value":"4", "image": "quiz-thumbimg-holiday6.jpg"} // no comma here
            ],

        }, 
		{ // Question 7
            "q": "WHERE WOULD YOU LOVE TO SPEND A WEEKEND?",
            "a": [
                {"option": "New York City",    "correct": true, "value":"1", "image": "quiz-thumbimg-weekend1.jpg"},
				{"option": "Seattle",    "correct": true, "value":"2", "image": "quiz-thumbimg-weekend2.jpg"},
				{"option": "San Francisco",    "correct": true, "value":"3", "image": "quiz-thumbimg-weekend3.jpg"},
				{"option": "Washington, D.C.",    "correct": true, "value":"4", "image": "quiz-thumbimg-weekend4.jpg"},
				{"option": "Austin",    "correct": true, "value":"5", "image": "quiz-thumbimg-weekend5.jpg"},
                {"option": "Nashville",     "correct": true, "value":"2", "image": "quiz-thumbimg-weekend6.jpg"} // no comma here
            ],

        } // no comma here// no comma here
		
    ]
};
