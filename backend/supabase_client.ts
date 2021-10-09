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
    let cardSets = await supabase.from<definitions["cardsets"]>("cardsets").select("*");
    console.log("Card Sets: ", cardSets);
    return cardSets.data;
}

export async function getCards(cardSetTitle: string) {
    let cardset = await supabase.from<definitions["cardsets"]>("cardsets").select("*").filter("title", "eq", cardSetTitle);
    
    let allCards = await supabase.from<definitions["cards"]>("cards").select("*").filter("cardset_id","eq",cardset.data[0].id);
    
    return {cards: allCards.data, cardset: cardset.data};
}



