window.onload = function() {
    function test()
    {
        document.getElementById('box').innerHTML = "Success!";
    }
    document.getElementById('test').onclick = test;
}