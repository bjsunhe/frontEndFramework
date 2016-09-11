function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		],
		videoAndTitlePairs = [];

	newReleases.forEach(function(video) {
		videoAndTitlePairs.push({ id: video.id, title: video.title });
	});

	return videoAndTitlePairs;
}

Array.prototype.map=function(projectionFunction){
  var results=[];
  this.forEach(function(itemInArray){
    results.push(projectionFunction(itemInArray));
  });
  return results;
}

Array.prototype.filter=function(predicateFunction){
  var results=[];
  this.forEach(function(itemInArray){
    if(predicateFunction(itemInArray)){
      results.push(itemInArray);
    }
  });
  return results;
}

Array.prototype.concatAll=function(){
  var results=[];
  this.forEach(function(subArray){
    results.push.apply(results,subArray);
  });
  return results;
}
Array.prototype.concatMap=function(projectionFunctionThatReturnsArray){
  return this.map(function(item){
    return projectionFunctionThatReturnsArray(item)
  }).concatAll();
}

Array.prototype.reduce=function(combiner,initialValue){
  var counter,accumulatedValue;
  if(this.length===0){
    return this;
  }else{
    if(arguments.length===1){
      counter=1;
      accumulatedValue=this[0];
    }else if(arguments.length>=2){
      counter=0;
      accumulatedValue=initialValue;
    }else{
      throw 'Invalid arguments.'
    }

    while(counter<this.length){
      accumulatedValue=combiner(accumulatedValue,this[counter]);
      counter++;
    }
    return [accumulatedValue];
  }

}
Array.zip=function(left,right,combinerFunction){
  var counter,results=[];
  for(counter=0;counter<Math.min(left.length,right.length);counter++){
    results.push(combinerFunction(left[counter],right[counter]));
  }
  return results;
};
