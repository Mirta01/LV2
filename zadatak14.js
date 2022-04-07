var broj = 2321514;

if(broj > 99)
{
    var nums = String(broj)
        .split('')
        .map(Number);
    
    console.log("Zbroj prvog (" + nums[0] + ") " +
        "i poslijednjeg (" + nums[nums.length - 1] + ") " +
        "broja je: " + (nums[0] + nums[nums.length - 1]));
}
else
{
    console.log("Broj nije veći od 99.");
}