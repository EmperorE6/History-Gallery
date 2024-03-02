import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import insta from "./instagram.png";
import git from "./github.png";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";

const sliki=[
 {img:"https://1.bp.blogspot.com/-qLIw2SAQq30/XcinlF5PFZI/AAAAAAAASmo/lH2pY93_OsEWk5cfq8JpoHtIezjmsGnawCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25284%2529.jpg",
  description:"It’s the most perilous yet playful lunch break ever captured: 11 men casually eating, chatting and sneaking a smoke as if they weren’t 840 feet above Manhattan with nothing but a thin beam keeping them aloft. That comfort is real; the men are among the construction workers who helped build Rockefeller Center.",
  year:1930,
  title:"Lunch Atop A Skyscraper, 1932"
},
 {img:"https://4.bp.blogspot.com/-A5Q5rEVYv9M/XcinhkxNKTI/AAAAAAAASmI/XVhc3mBudMYOfTTGE14FXIridqsZHycUQCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25282%2529.jpg",
 description:"In June 1963, most Americans couldn’t find Vietnam on a map. But there was no forgetting that war-torn Southeast Asian nation after Associated Press photographer Malcolm Browne captured the image of Thich Quang Duc immolating himself on a Saigon street.",
 year:1960,
 title:"The Burning Monk, 1963"
},
 {img:"https://1.bp.blogspot.com/-rHBjaTv7uME/Xcinlc7krwI/AAAAAAAASms/yefiucFRYiYvrFBF00Gl8yY8qH8BzWpggCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25285%2529.jpg",
 description:"On the morning of June 5, 1989, photographer Jeff Widener was perched on a sixth-floor balcony of the Beijing Hotel.It was a day after the Tiananmen Square massacre when Chinese troops attacked pro-democracy demonstrators camped on the plaza, and the Associated Press sent Widener to document the aftermath.Widener lined up his lens just as a man carrying shopping bags stepped in front of the war machines, waving his arms and refusing to move.",
 year:1980,
 title:"Tank Man, 1989"
},
 {img:"https://4.bp.blogspot.com/-yghchTQY8C8/XcinlzoJG1I/AAAAAAAASmw/KmVF_u4N2d4ZSN5XkmBqRFZoixTmeoGoACLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25286%2529.jpg",
 description:"The most widely seen images from 9/11 are of planes and towers, not people. Falling Man is different. The photo, taken by Richard Drew in the moments after the September 11, 2001, attacks, is one man’s distinct escape from the collapsing buildings, a symbol of individuality against the backdrop of faceless skyscrapers.",
 year:2000,
 title:"Falling Man, 2001"
},
 {img:"https://4.bp.blogspot.com/-jzV4G1qkZjM/Xcinm6OYwVI/AAAAAAAASm4/aLgayzjDa6YvMh5HzJvA3gqtIvKto8yYwCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25288%2529.jpg",
 description:"It’s never easy to identify the moment a hinge turns in history. When it comes to humanity’s first true grasp of the beauty, fragility and loneliness of our world, however, we know the precise instant.It was on December 24, 1968, exactly 75 hours, 48 minutes and 41 seconds after the Apollo 8 spacecraft lifted off from Cape Canaveral en route to becoming the first manned mission to orbit the moon.",
 year:1960,
 title:"Earthrise, 1968"
},
 {img:"https://4.bp.blogspot.com/-_QDNLsD4v3E/Xcinu9L7w-I/AAAAAAAASm8/ASbLkC0hhUsnaMjCE_8rflWwyrQBwGu-gCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25289%2529.jpg",
 description:"Three days after an atomic bomb nicknamed Little Boy obliterated Hiroshima, Japan, U.S. forces dropped an even more powerful weapon dubbed Fat Man on Nagasaki. The explosion shot up a 45,000-foot-high column of radioactive dust and debris.“We saw this big plume climbing up, up into the sky,” recalled Lieutenant Charles Levy, the bombardier, who was knocked over by the blow from the 20-kiloton weapon.",
 year:1940,
 title:"Mushroom Cloud Over Nagasaki, 1945"
},

 {img:"https://2.bp.blogspot.com/-9hTHwOSHPF0/Xcinds3KljI/AAAAAAAASlk/4Iyf8J8d9Yk7kAZKLuOF0KTbQJ1BPMJgACLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%252810%2529.jpg",
 description:"Alfred Eisenstaedt, one of the first four photographers hired by LIFE magazine, made it his mission “to find and catch the storytelling moment.He didn’t have to go far for it when World War II ended on August 14, 1945. Taking in the mood on the streets of New York City, Eisenstaedt soon found himself in the joyous tumult of Times Square.As he searched for subjects, a sailor in front of him grabbed hold of a nurse, tilted her back and kissed her.",
 year:1940,
 title:"V-J Day In Times Square, 1945"
},
 {img:"https://4.bp.blogspot.com/-NrPkh_IZTCs/XcinebvERpI/AAAAAAAASls/Rh3wcQrxdi4tv5xnyTOwY-ZsCiNzYDZNQCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%252813%2529.jpg",
 description:"Somewhere in the Sea of Tranquillity, the little depression in which Buzz Aldrin stood on the evening of July 20, 1969, is still there—one of billions of pits and craters and pockmarks on the moon’s ancient surface. But it may not be the astronaut’s most indelible mark.Since it was Armstrong who was carrying the crew’s 70-millimeter Hasselblad, he took all of the pictures—meaning the only moon man earthlings would see clearly would be the one who took the second steps",
 year:1960,
 title:"A Man On The Moon, 1969"
},
 {img:"https://3.bp.blogspot.com/-KkcZJh5Xk0M/Xcm7hLOu4uI/AAAAAAAASqU/29rz7CdByLY2c-JH4UMC0Zq9AekRugsDgCLcBGAsYHQ/s1600/Times_Most_Influental_Images_50%2B%252822%2529.jpg",
 description:"Before they could become American royalty, America needed to meet John Fitzgerald Kennedy and Jacqueline Lee Bouvier. That introduction came when Hy Peskin photographed the handsome politician on the make and his radiant fiancée over a summer weekend in 1953. Peskin, a renowned sports photographer, went to Hyannis Port, Mass., at the invitation of family patriarch Joseph Kennedy.",
 year:1950,
 title:"Camelot, 1953"
},
 {img:"https://3.bp.blogspot.com/-9nU52Tb1y6o/XcinggxAzZI/AAAAAAAASmA/M7bpqjmhSCkwH2xxt10rapcVl1BLu_dxgCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%252818%2529.jpg",
 description:"The arrival of Zeppelins was news, which is why Sam Shere of the International News Photos service was waiting in the rain at the Lakehurst, N.J., Naval Air Station on May 6, 1937, for the 804-foot-long LZ 129 Hindenburg to drift in from Frankfurt.Suddenly, as the assembled media watched, the grand ship’s flammable hydrogen caught fire, causing it to spectacularly burst into bright yellow flames and kill 36 people.",
 year:1930,
 title:"The Hindenburg Disaster, 1937"
},
 {img:"https://2.bp.blogspot.com/-ZTLx2LHlZaQ/XcinhOMe99I/AAAAAAAASmE/fDxL5LEHbbEX9l8o24ntaTkLyqbdfqjJQCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%252819%2529.jpg",
 description:"The day before Alberto Korda took his iconic photograph of Cuban revolutionary Che Guevara, a ship had exploded in Havana Harbor, killing the crew and dozens of dockworkers. Covering the funeral for the newspaper Revolución, Korda focused on Fidel Castro, who in a fiery oration accused the U.S. of causing the explosion. The two frames he shot of Castro’s young ally were a seeming afterthought, and they went unpublished by the newspaper.After  Guevara was killed the Cuban regime embraced him as a martyr for the movement and this photo become famous",
 year:1960,
 title:"Guerillero Heroico, 1960"
},
 {img:"https://3.bp.blogspot.com/-BfFYF0SHn6k/XciniO2kgjI/AAAAAAAASmM/l3FSaQm44qgD57JJ168qZEzOgCmek0ZEgCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%252820%2529.jpg",
 description:"Inspired by Dalí’s painting Leda Atomica, Halsman created an elaborate scene to surround the artist that included the original work, a floating chair and an in-progress easel suspended by thin wires.Assistants, including Halsman’s wife and young daughter Irene, stood out of the frame and, on the photographer’s count, threw three cats and a bucket of water into the air while Dalí leaped up.",
 year:1940,
 title:"Dalí Atomicus, 1948"
},
 {img:"https://3.bp.blogspot.com/-UISVG4TvJm8/XcmwMq63P7I/AAAAAAAASog/6WBSEVzr1okFYMbOLLKtLIsfp233-y10QCLcBGAsYHQ/s1600/Times_Most_Influental_Images_26%2B%252824%2529.jpg",
 description:" Nichols and the National Geographic Society explorer Michael Fay undertook an arduous 2,000-mile trek from the Congo in central Africa to Gabon on the continent’s west coast. That was where Nichols captured a photograph of something astonishing—­hippopotamuses swimming in the midnight blue Atlantic Ocean. It was an event few had seen before—while hippos spend most of their time in water, their habitat is more likely to be an inland river or swamp than the crashing sea.",
 year:2000,
 title:"Surfing Hippos, 2000"
},
 {img:"https://2.bp.blogspot.com/-smZV2DGncJI/XcnkGFCAARI/AAAAAAAASsM/KxuhC94-dvcqew32O2TJisOJV3HmkCIBwCLcBGAsYHQ/s1600/Times_Most_Influental_Images_75%2B%25282%2529.jpg",
 description:"When Richard Avedon photographed Dovima at a Paris circus in 1955 for Harper’s Bazaar, both were already prominent in their fields. She was one of the world’s most famous models, and he was one of the most famous fashion photographers. It makes sense, then, that Dovima With Elephants is one of the most famous fashion photographs of all time. But its enduring influence lies as much in what it captures as in the two people who made it.",
 year:1950,
 title:" Dovima With Elephants, Paris, 1955"
},
 {img:"https://1.bp.blogspot.com/-kx07zG7xZ80/XcmwPahXwvI/AAAAAAAASpA/IOnUP7lq4BYnqK_-akCltJ019tUz5J0-ACLcBGAsYHQ/s1600/Times_Most_Influental_Images_26%2B%25289%2529.jpg",
 description:"“This is what I was waiting for 1,400 days,” the Ukrainian-born Yevgeny Khaldei said as he gazed at the ruins of Berlin on May 2, 1945. After four years of fighting and photographing across Eastern Europe, the Red Army soldier arrived in the heart of the Nazis’ homeland armed with his ­Leica III rangefinder and a massive Soviet flag that his uncle, a tailor, had fashioned for him from three red tablecloths. Gazing through his camera, Khaldei knew he had the shot he had hoped for: “I was euphoric.”",
 year:1940,
 title:"Raising A Flag Over The Reichstag, 1945"
},
 {img:"https://3.bp.blogspot.com/-kv8o_XEASw8/Xcm7iqyT6NI/AAAAAAAASqk/NGU0rx1lv7orqYlhr4X5TidYf2i17zXxQCLcBGAsYHQ/s1600/Times_Most_Influental_Images_50%2B%252826%2529.jpg",
 description:"Few images are as stark as one of an execution. On August 27, 1979, 11 men who had been convicted of being “counterrevolutionary” by the regime of Iranian ruler Ayatullah Ruhollah Khomeini were lined up on a dirt field at Sanandaj Airport and gunned down side by side. No international journalists witnessed the killings.",
 year:1970,
 title:"Firing Squad In Iran, 1979"
},
 {img:"https://3.bp.blogspot.com/-iNroFKF-1Oc/XcnkJe0lzgI/AAAAAAAASso/i6huZjho0Iw8rZnqizGMc6uYOTotdkl8QCLcBGAsYHQ/s1600/Times_Most_Influental_Images_75%2B%25283%2529.jpg",
 description:"It may be the most famous silhouette ever photographed. Shooting Michael Jordan for LIFE in 1984, Jacobus “Co” Rentmeester captured the basketball star soaring through the air for a dunk, legs split like a ballet dancer’s and left arm stretched to the stars. A beautiful image, but one unlikely to have endured had Nike not devised a logo for its young star that bore a striking resemblance to the photo.",
 year:1980,
 title:"Michael Jordan, 1984"
},
 {img:"https://4.bp.blogspot.com/-f3fgwI9igQk/Xcm7kSFt1dI/AAAAAAAASq0/RafkXlEVbhYMZFWpslwj-KXiH7G7CqaVQCLcBGAsYHQ/s1600/Times_Most_Influental_Images_50%2B%25286%2529.jpg",
 description:"It’s our nature to grow bored with the improbable but real and look for the impossible. So it is with the photo of what was said to be the Loch Ness monster, purportedly taken by British doctor Robert Wilson in April 1934. Wilson, however, had simply been enlisted to cover up an earlier fraud by wild-game hunter Marmaduke Wetherell, who had been sent to Scotland by London’s Daily Mail to bag the monster. There being no monster to bag, Wetherell brought home photos of hippo prints that he said belonged to Nessie.",
 year:1930,
 title:"The Loch Ness Monster, 1934"
},
 {img:"https://4.bp.blogspot.com/-4gMCsOfoY9Y/XcinksN_AcI/AAAAAAAASmk/01kxB_mw980V-DLascpwajOj-KrrDjgJQCLcBGAsYHQ/s1600/Times_Most_Influental_Images%2B%25283%2529.jpg",
 description:"Kevin Carter knew the stench of death. As a member of the Bang-Bang Club, a quartet of brave photographers who chronicled apartheid-­era South Africa, he had seen more than his share of heartbreak. In 1993 he flew to Sudan to photograph the famine racking that land. He headed out into the open bush. There he heard whimpering and came across an emaciated toddler who had collapsed on the way to a feeding center. As he took the child’s picture, a plump vulture landed nearby.",
 year:1990,
 title:"Starving Child And Vulture, 1993"
},
 {img:"https://1.bp.blogspot.com/-U7nhyvAn90k/XcmwKkg662I/AAAAAAAASoM/41UdbpRd1Bg330yOyoEqopuhPA6GpkhFwCLcBGAsYHQ/s1600/Times_Most_Influental_Images_26%2B%25282%2529.jpg",
 description:"Hoffmann, who joined the party in 1920 and became Hitler’s personal photographer and confidant, was charged with choreographing the regime’s propaganda carnivals and selling them to a wounded German public. Nowhere did Hoffmann do it better than on September 30, 1934, in his rigidly symmetrical photo at the Bückeberg Harvest Festival, where the Mephistophelian Führer swaggers at the center of a grand Wagnerian fantasy of adoring and heiling troops.",
 year:1930,
 title:"Hitler At A Nazi Party Rally, 1934"
},
 {img:"https://2.bp.blogspot.com/-T_nXFokBT3k/XcnkLeD_BBI/AAAAAAAASs8/QHK_Qttd1jA_ndQAjaLAMNlBf1vC_Cm0wCLcBGAsYHQ/s1600/Times_Most_Influental_Images_75%2B%25287%2529.jpg",
 description:"Nowhere is this tension higher than in Trolley—New Orleans, a fleeting moment that conveys the brutal social order of postwar America. The picture, shot a few weeks before Rosa Parks refused to give up her seat on a bus in Montgomery, Ala., was unplanned. Frank was shooting a street parade when he saw the trolley passing. Spinning around, Frank raised his camera and shot just before the trolley disappeared from view. The picture was used on the cover of early editions of The Americans, fueling criticism that the work was anti-American.",
 year:1950,
 title:"Trolley To New Orleans, 1955"
},
 {img:"https://4.bp.blogspot.com/--sJ1grK3kKY/XcnkGlCmBqI/AAAAAAAASsQ/BjpKihI6MwkJ2PwhgakPadhjZOC_Uc3DwCLcBGAsYHQ/s1600/Times_Most_Influental_Images_75%2B%252820%2529.jpg",
 description:"Susan Meiselas traveled to Nicaragua in the late 1970s as a young photographer with an anthropologist’s eye, keen to make sense of the struggle between the long-standing Somoza dictatorship and the socialist Sandinistas fighting to overthrow it. Meiselas’ work was sympathetic to the Sandinista cause, and she gained the trust of the revolutionaries as they slowly prevailed in the fight. On the day before President Anastasio Somoza Debayle fled, Meiselas photographed Pablo de Jesus “Bareta” Araúz lobbing a Molotov cocktail at one of the last national guard fortresses.",
 year:1970,
 title:"Molotov Man, 1979"
},
 {img:"https://hips.hearstapps.com/hmg-prod/images/nelson-mandelas-liberation-in-south-africa-on-february-11-news-photo-1579028350.jpg?crop=1xw:1xh;center,top&resize=980:*",
 description:"On 11 February, photographers, journalists, TV crews and crowds of thousands waited in the searing heat outside the prison gates. Finally, in the early afternoon, the gates opened and Mandela appeared with his wife Winnie. He had not been photographed for more than 25 years and this grey-haired, smartly dressed and dignified figure looked very different from the young revolutionary fighter the world had previously seen.",
 year:1990,
 title:"Nelson and Winnie Mandela punch the air in triumph, 1990"
},
 {img:"https://static.hiphopdx.com/2016/09/last-tupac-shakur-photo-suge-knight-640x398.jpg",
 description:"On September 7, 1996, Leonard Jefferson, a 29-year-old from Los Angeles, went to Las Vegas to see a Mike Tyson fight. It was a night he would remember for the rest of his life. He never saw Tyson, but he did see 2Pac, at an intersection just off the Strip, and snapped a photograph of him. It turned out to be the last picture taken of 2Pac while he was still alive. Just minutes later, the rapper would be gunned down by unknown assailants. It’s been two decades, and Jefferson still has a story to tell.",
 year:1990,
 title:"Tupac's last photograph, 1996"
},
 {img:"https://www.phaidon.com/resource/ecvr-afghan-girl-near-peshwar-pakistan-1984.jpg",
 description:"National Geographic photographer Steve McCurry shot this iconic image of Sharbat Gula, a 12-year old Afghan girl. She was one of the students in an informal school within the refugee camp and her haunting face, a rarity to be so fully showcased, much less photographed, made it on the cover of National Geographic in 1985. Sharbat’s image captured the imagination of generations the world-over, becoming a symbol of the 1980 Afghan conflict and plight of refugees.",
 year:1980,
 title:"Afghan Girl, 1984"
},
 {img:"https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/2/18/Albert-Einstein_Arthur-Sasse-UPI-AFP.jpg.rend.hgtvcom.1280.960.suffix/1583003474847.jpeg",
 description:"It was Einstein’s 72nd birthday in 1951 and he celebrated at The Princeton Club. Goaded to smile for the camera, he impetuously stuck out his tongue, with Sasse on hand to snap the iconic shot, while other photographers surrounding the car missed it. Showcasing a light and nutty professor side to the celebrated scientist rather than the serious one that many assumed about the man, the photo softened the perception of Einstein, which he seemingly liked as he ordered nine copies",
 year:1950,
 title:"Albert Einstein, 1951"
},
{img:"https://cdn.cnn.com/cnn/interactive/2018/07/world/2000s-cnnphotos/media/08.jpg",
 description:"After the first plane crashed into the World Trade Center, Kelly Guenther grabbed her camera gear and ran to the Brooklyn Heights Promenade that overlooks the New York Harbor and the skyline of Lower Manhattan. Then she saw the second plane coming. “I remember thinking, ‘No, no, no!’ Then I took a breath and told myself, ‘Do your job.’ I put the camera to my face, framed the skyline wide in my viewfinder, and I waited for the plane to come into my frame on the left.”",
 year:2000,
 title:"The second plane crash into twin towers, 2001"
},
 {img:"https://4.bp.blogspot.com/-RqhjidSllrg/XcnkFm2YCXI/AAAAAAAASsI/A6BOKg5917cyL6bsKpadKFyGIW_9Dg5SwCLcBGAsYHQ/s1600/Times_Most_Influental_Images_75%2B%252819%2529.jpg",
 description:"In late August 1973, Allende appointed Augusto ­Pinochet as commander of the army. Eighteen days later, the conservative general orchestrated a coup. Allende refused to leave. Armed with an AK-47 and protected only by loyal guards at his side, he broadcast his final address on the radio, the sound of gunfire audible in the background. As Santiago’s presidential palace was bombarded, Luis Orlando Lagos, Allende’s official photographer, captured one of his final moments.",
 year:1970,
 title:"Allende’s Last Stand, 1973"
},
]


function App() {
  const [isHovered,setisHovered]=useState(false);
  const [years, setYears] = useState();

  function handleLocation(location) {
    window.location.href = location;
  }

  function handleYear(year){
    setYears(year);
  }
  function handleMouseIn(index){
    setisHovered(index);

  }
  function handleMouseOut(){
    setisHovered(false);

  }
  const filteredPhotos = years ? sliki.filter(photo => photo.year === years) : sliki;

  return (
    <div className="container">
     <h1>Captured Moments: A Photographic Journey Through Time</h1>
     <div className='yearNavigation'>
      <button  className={years === null ? 'active' : ""} onClick={()=>{handleYear(null)}}>All</button>
      <button  className={years === 1930 ? 'active' : ""} onClick={()=>{handleYear(1930)}}>30s</button>
      <button className={years === 1940 ? 'active' : ""} onClick={()=>{handleYear(1940)}}>40s</button>
      <button className={years === 1950 ? 'active' : ""} onClick={()=>{handleYear(1950)}}>50s</button>
      <button className={years === 1960 ? 'active' : ""} onClick={()=>{handleYear(1960)}}>60s</button>
      <button className={years === 1970 ? 'active' : ""} onClick={()=>{handleYear(1970)}}>70s</button>
      <button className={years === 1980 ? 'active' : ""} onClick={()=>{handleYear(1980)}}>80s</button>
      <button className={years === 1990 ? 'active' : ""} onClick={()=>{handleYear(1990)}}>90s</button>
      <button className={years === 2000 ? 'active' : ""} onClick={()=>{handleYear(2000)}}>00s</button>
     </div>
     <div className='Photos'>
       {filteredPhotos.map((element,index)=>
       (
        <div key={index} className='photo-container' onMouseEnter={() => handleMouseIn(index)} onMouseLeave={handleMouseOut}>
        <img src={element.img}  alt="Photo" />
        <div className={isHovered === index ? "hoverDiv" : "hoverDrug"}>
          <h2>{element.title}</h2>
          <p>{element.description}</p>
          <div className='contacts'>
            <img src={insta} onClick={()=> handleLocation("https://www.instagram.com/andrejgorgiev11/")}></img>
            <img src={linkedin} onClick={()=> handleLocation("https://www.linkedin.com/in/andrej-gorgiev-4198692b5/")}></img>
            <img src={git} onClick={()=> handleLocation("https://github.com/EmperorE6?tab=repositories")}></img>
            <img src={facebook} onClick={()=> handleLocation("https://www.facebook.com/profile.php?id=100009507191715&locale=mk_MK")}></img>
          </div>
          <button className='readmore' onClick={()=> handleLocation("https://rarehistoricalphotos.com/100-influential-historical-pictures-all-time/")}>Read More</button>
          </div>
      </div>
       ))}
   
     </div>
    </div>
  );
}
export default App;
