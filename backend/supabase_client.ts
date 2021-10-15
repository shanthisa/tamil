
import { createClient } from "@supabase/supabase-js";
import { definitions } from "../types/supabase";

//import * as constants from "../components/constants";

// @ts-ignore 
const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY);

// export async function insertCards(){
//     // @ts-ignore
//     let tempcards = constants.flashcards.map((c) => {
        
//         return {
            
//             title: c.title,
//             subtitle: c.subtitle,
//             title_en: c.title_en,
//             image: c.image,
//             audio: c.url,
//             cardset_id: c.cardSetID,
           
//         }
//     })
//     console.log("tempcards:", tempcards);
//     let cards = await supabase.from<definitions["cards"]>("cards").insert(tempcards);
//     console.log("insertCards:", cards);
// }

export async function getCardSets() {
    // let allCards = await supabase.from<definitions["cards"]>("cards").select("*")
    // console.log('testing cards ', allCards);
    let cardSetsResp = await supabase.from<definitions["cardsets"]>("cardsets").select("*");
    let cardSets = cardSetsResp.data;
    let imageUrls = await Promise.all(cardSets.map((cs) => supabase.storage.from("tfcmedia").createSignedUrl(cs.image_url, 60)));
    cardSets.forEach((cs, idx) => {cs.image_url = imageUrls[idx].signedURL });
    console.log("Card Sets: ", cardSets);
    return cardSets;
}

export async function getCards(cardSetTitle: string) {
    let cardset = await supabase.from<definitions["cardsets"]>("cardsets").select("*").filter("title", "eq", cardSetTitle);
    
    let allCardsResp = await supabase.from<definitions["cards"]>("cards").select("*").order('id').filter("cardset_id","eq",cardset.data[0].id);
    let allCards = allCardsResp.data;
    let imageUrls = await Promise.all(allCards.map((c)=>supabase.storage.from("tfcmedia").createSignedUrl(c.image, 1000)));
    let audioUrls = await Promise.all(allCards.map((c)=> supabase.storage.from("tfcmedia").createSignedUrl(c.audio, 1000)));
    allCards.forEach((c,idx) => {
        c.image = imageUrls[idx].signedURL;
        c.audio = audioUrls[idx].signedURL;
    });
    return {cards: allCards, cardset: cardset.data};
}

export async function SignInWithGoogle() {
    const {user, session, error} = await supabase.auth.signIn({
        provider: "google"
    });
}

export async function SignOut() {
    const {error} = await supabase.auth.signOut();
}


