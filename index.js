var numberOfBottles = 99
function beer(){
while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
    if(numberOfBottles===0){
          document.write(" No more bottles of beer on the wall");
          document.write(" buy more!");

          return false;
    }
    document.write(numberOfBottles + " " + bottleWord + " of beer on the wall");
    document.write(numberOfBottles + " " + bottleWord + " of beer,");
    document.write("Take one down, pass it around,");
	numberOfBottles--;
  if (numberOfBottles === 1) {
      bottleWord = "bottle";
  }

    document.write(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

}
