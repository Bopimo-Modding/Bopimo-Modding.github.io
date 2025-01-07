const randomText = [
    "Tell the Words Of Wisdom Bopi i said hi",
    "Tell the TheShovel I said hi",
    "Tell the 0array I said hi",
    "Tell the Evlyn I said hi",
    "Tell the Fzorb I said hi",
    "Tell the Yek I said hi",
    "Tell the Matt I said hi",
    "Tell the Molly I said hi",
    "Tell the Teem I said hi",
    "Tell the Heka I said hi",
    "Tell the Butab I said hi",
    "Tell the FireCatMagic I said hi",
    "Tell the Leaf I said hi",
    "Shoutouts to ZKeven",

    "I really need to stop working on things at 3 in the morning",
    "If you spam on the foru- Wait wrong site",
    "Beep Boop!",
    "Ban Domas",

    "Who left their Ice Cream lying around",
    "What do you mean I have to destroy the sun",
    "Whats a Robot 32",
    "Whats a Robot 64",

    "Where did the page go o_o",
    "I'm kind of hungry :V",

    "...?",
    "Wha..?",
    "Zzz...",

    "._.",
    ",_,",
    "/_ /",
    "o_O",
    "o_o",
    "0_0",
    "._.?",
    "'~'",

    "Page Not Found.",
    "It sees all..."
]


let playing = false

$(document).ready(function(){
    let random = Math.floor(Math.random() * randomText.length);
    $("#error-text h1").text(randomText[random]);

    /* The Eye */
    if (random == randomText.length-1) { //random == randomText.length-1
        $("#error-text").hide();
        $("#error-image").hide();
        $(".four-zero-four").css("width", "10%");
        $("#error-bopi").attr("src", "/Files/Images/404/BleedingEye.png");
        $(".background-pattern").css("animation", "scrolling-pattern 48s infinite linear");
        $(".background-pattern").css("background-color", "black");
        $(".four-zero-four").css("filter", "none")
    }

    $("html").click(function(){
        if (!playing) {
            playing = true
            console.log("CLICK!")
            $("#bgm")[0].play();
        }
    });
  
  }); 