const randomText = [
    "Tell the Words Of Wisdom Bopi i said hi",
    "Tell TheShovel I said hi",
    "Tell 0array I said hi",
    "Tell Evelyn I said hi",
    "Tell Fzorb I said hi",
    "Tell Yek I said hi",
    "Tell Matt I said hi",
    "Tell Molly I said hi",
    "Tell Teem I said hi",
    "Tell Heka I said hi",
    "Tell Butab I said hi",
    "Tell Leon I said hi",
    "Tell Isaiah I said hi",
    "Tell FireCatMagic I said hi",
    "Tell Leaf I said hi",
    "Tell Mati3D I said hi",
    "Shoutouts to ZKeven",
    "Shoutouts to KoBeWi",

    "I really need to stop working on things at 3 in the morning",
    "If you spam on the foru- Wait wrong site",
    "Think you might have gotten a bit lost...",
    "Beep Boop!",
    "Ban Domas",

    "The Title Screen holds secrets...",
    "Backspace + B",
    "Ctrl + B",
    "Ctrl + S",

    "Who left their Ice Cream lying around",
    "What do you mean I have to destroy the sun",
    "Whats a Robot 32",
    "Whats a Robot 64",

    "Where did the page go o_o",
    "I'm kind of hungry :V",

    "...?",
    "Huh?!",
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
    "It sees all...",

    "snooPING AS usual i see" //Never shown.
]


let playing = false

$(document).ready(function(){
    let random = Math.floor(Math.random() * randomText.length-1);
    $("#error-text h1").text(randomText[random]);

    /* The Eye */
    if (random == randomText.length-2) { //random == randomText.length-1
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