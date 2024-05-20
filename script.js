const letters = [
    {
        title: "When You Are Sad",
        content: `My Precious One,
        When tears stain your cheeks so fair,
        And sorrow weighs heavy in the air,
        Know that I am here to hold you tight,
        To chase away the shadows of the night.
        Let my love be your refuge, your sanctuary,
        A beacon of hope in moments so dreary.
        For even in sadness, love can heal,
        Like a soothing balm, tender and real.
        Holding You Close,
        Gabangaye Guliwe`
    },
    {
        title: "When You Are Worried",
        content: `My Dearest Heart,
        When worries cloud your mind's gentle stream,
        And anxiety disrupts your peaceful dream,
        Know that my love is a steadfast guide,
        In every storm, I'll be by your side.
        Together, we'll weather life's turbulent sea,
        With faith and love as our compass, you'll see.
        So cast your worries into the wind,
        And let my love bring calm within.
        Easing Your Mind,
        Gabangaye Guliwe`
    },
    {
        title: "When You Are Excited",
        content: `My Beloved,
        When excitement bubbles in your soul,
        And anticipation takes control,
        Know that I share in your jubilant glee,
        As happy as can be, just you and me.
        Your enthusiasm ignites a flame,
        Lighting up my world, never the same.
        So let's dance in the joy of this moment so bright,
        And revel in love's pure and radiant light.
        Sharing Your Joy,
        Gabangaye Guliwe`
    },
    {
        title: "When You Are Angry",
        content: `My Precious One,
        When anger boils within your core,
        And frustration knocks at your door,
        Know that my love is a calming breeze,
        To soothe your soul and put you at ease.
        Let's navigate through the stormy sea,
        With understanding and empathy.
        For even in anger, our love prevails,
        Like a sturdy ship with steadfast sails.
        Calming Your Storm,
        Gabangaye Guliwe`
    },
    {
        title: "When You Are Confused",
        content: `My Dearest Heart,
        When confusion clouds your mind's clear view,
        And uncertainty leaves you feeling blue,
        Know that my love is a guiding light,
        To lead you through the darkest night.
        Together, we'll unravel life's mysteries,
        With patience, trust, and sweet reveries.
        For even in confusion, clarity will bloom,
        Like a flower in spring, dispelling gloom.
        Guiding You Through,
        Gabangaye Guliwe`
    },
    {
        title: "When You Need Comfort",
        content: `My Beloved,
        When the weight of the world feels too much to bear,
        And life's burdens seem too heavy to share,
        Know that my arms are a haven for you,
        A place of solace, pure and true.
        Let my love be the blanket that warms your soul,
        And my presence the anchor that makes you whole.
        For in moments of need, I'll always be near,
        To wipe away your every fear.
        Offering Comfort,
        Gabangaye Guliwe`
    },
    {
        title: "When You Need Encouragement",
        content: `My Precious One,
        When doubt creeps in and dims your light,
        And obstacles loom, daunting in sight,
        Know that my love is a steadfast flame,
        To ignite your spirit, fuel your aim.
        Together, we'll conquer mountains high,
        With determination soaring to the sky.
        For in every challenge, strength is found,
        And love's embrace, forever profound.
        Inspiring You Always,
        Gabangaye Guliwe`
    },
    {
        title: "When You Need Solitude",
        content: `My Precious One,
        When the world feels overwhelming and loud,
        And solitude beckons like a soft, comforting shroud,
        Know that my love honors your need,
        For moments of silence, to quietly heed.
        Let's cherish the quiet, the peace it brings,
        Like the melody of a lone bird's wings.
        For in solitude, we find our inner voice,
        And love's presence, a comforting choice.
        Respecting Your Space,
        Gabangaye Guliwe`
    },
    {
        title: "When You Are Feeling Insecure",
        content: `My Beloved,
        When insecurities cast shadows on your heart,
        And self-doubt tears your confidence apart,
        Know that my love sees the beauty within,
        A radiant light that shines through any din.
        Let my words be a mirror to reflect,
        The love and admiration I'll always protect.
        For in your flaws, I find perfection's grace,
        A masterpiece woven with love's embrace.
        Embracing Your Imperfections,
        Gabangaye Guliwe`
    },
    {
        title: "When You Need Motivation",
        content: `My Precious One,
        When motivation wanes and spirits dip low,
        And the journey ahead feels like a heavy blow,
        Know that my love is a beacon of light,
        To guide you through the darkest of night.
        Together, we'll conquer mountains tall,
        With determination as our clarion call.
        For in every step forward, victory's near,
        And love's encouragement, forever sincere.
        Fuelling Your Ambition,
        Gabangaye Guliwe`
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("letterContent");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".letter").forEach((element, index) => {
        element.addEventListener("click", () => {
            modalContent.textContent = letters[index].content;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
