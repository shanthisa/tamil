import { createClient } from "@supabase/supabase-js";
import { definitions } from "../types/supabase";

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY);


export async function getCardSets() {
    // let allCards = await supabase.from<definitions["cards"]>("cards").select("*")
    // console.log('testing cards ', allCards);
    let cardSets = await supabase.from<definitions["cardsets"]>("cardsets").select("*");
    console.log("Card Sets: ", cardSets);
    return cardSets.data;
}





