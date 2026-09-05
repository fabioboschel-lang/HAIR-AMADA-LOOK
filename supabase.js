 import {
  createClient
} from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";


const supabaseUrl =
  "https://bdqcfzeuextdzmsapref.supabase.co";


const supabaseKey =
  "sb_publishable_Dvr9uhTqvLgLYwF4PUXmgA_Iyh3-dl3";


export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  );
