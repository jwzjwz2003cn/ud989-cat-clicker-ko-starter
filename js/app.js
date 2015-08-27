var Cat = function () {
		this.clickCount = ko.observable(0);
		this.name = ko.observable('Tabby');
		this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
		this.imgAttribution = ko.observable('https://www.flickr.com/photos');
		this. nickNames = ko.observableArray([
				"miumiu",
				"catto",
				"kitty"
		]);

		this.level = ko.computed(function() {
			 var level;
			 var clicks = this.clickCount();
			 if (clicks < 10){
					level = "NewBorn";
			 } else if (clicks == 10){
				 	level = "Teen";
			 } else if (clicks == 100) {
					level = "Teen";
			 } else if (clicks == 200) {
					level = "Adult";
			 }
			 return level;
		}, this);
}

var ViewModel = function() {

	  this.currentCat = ko.observable(new Cat());
		this.incrementCounter = function () {
				this.currentCat().clickCount(this.currentCat().clickCount() + 1);
		};

}

ko.applyBindings(new ViewModel());
