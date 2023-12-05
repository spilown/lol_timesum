const { default: axios } = require("axios");

const list = [
  "KR_6830388350",
  "KR_6830289557",
  "KR_6830182544",
  "KR_6830028528",
  "KR_6829959114",
  "KR_6829679811",
  "KR_6829591388",
  "KR_6828372324",
  "KR_6828237240",
  "KR_6828101885",
  "KR_6827996390",
  "KR_6827882710",
  "KR_6827793527",
  "KR_6827711103",
  "KR_6824619224",
  "KR_6824482339",
  "KR_6824373591",
  "KR_6824281116",
  "KR_6824175761",
  "KR_6824057462",
  "KR_6823880755",
  "KR_6823077094",
  "KR_6822977907",
  "KR_6822921486",
  "KR_6822595169",
  "KR_6822401533",
  "KR_6820767403",
  "KR_6819690518",
  "KR_6819365833",
  "KR_6819328391",
  "KR_6819256037",
  "KR_6819172678",
  "KR_6817884601",
  "KR_6803884289",
  "KR_6803317418",
  "KR_6802023217",
  "KR_6801885657",
  "KR_6801821243",
  "KR_6801656941",
  "KR_6801599272",
  "KR_6801488726",
  "KR_6801428325",
  "KR_6801234715",
  "KR_6801187596",
  "KR_6801130305",
  "KR_6791220814",
  "KR_6791148884",
  "KR_6791055378",
  "KR_6790941355",
  "KR_6790809053",
  "KR_6788360572",
  "KR_6788273887",
  "KR_6788155144",
  "KR_6788074196",
  "KR_6787939722",
  "KR_6785692190",
  "KR_6785610810",
  "KR_6785548812",
  "KR_6785488570",
  "KR_6785430669",
  "KR_6784449412",
  "KR_6784397616",
  "KR_6784357618",
  "KR_6784318600",
  "KR_6784257378",
  "KR_6784172707",
  "KR_6782492988",
  "KR_6782425803",
  "KR_6782307631",
  "KR_6782191957",
  "KR_6782090646",
  "KR_6781977522",
  "KR_6781902553",
  "KR_6781810791",
  "KR_6779076715",
  "KR_6779001538",
  "KR_6778292730",
  "KR_6778253667",
  "KR_6778221745",
  "KR_6777729647",
  "KR_6777656090",
  "KR_6777587066",
  "KR_6777527095",
  "KR_6777441840",
  "KR_6776468347",
  "KR_6776389069",
  "KR_6776254750",
  "KR_6776169304",
  "KR_6775128904",
  "KR_6775083249",
  "KR_6774967914",
  "KR_6773988754",
  "KR_6773957594",
  "KR_6773922310",
  "KR_6773883075",
  "KR_6773761399",
  "KR_6773640990",
  "KR_6773571568",
  "KR_6773524563",
  "KR_6773484162",
  "KR_6771118946",
  "KR_6768158271",
  "KR_6767133372",
  "KR_6763468045",
  "KR_6763413343",
  "KR_6763329295",
  "KR_6763244835",
  "KR_6763156096",
  "KR_6761775635",
  "KR_6761713377",
  "KR_6761653495",
  "KR_6761602263",
  "KR_6761486256",
  "KR_6761363744",
  "KR_6761224929",
  "KR_6761133436",
  "KR_6759987843",
  "KR_6759947986",
  "KR_6759910092",
  "KR_6759731488",
  "KR_6759603663",
  "KR_6759389164",
  "KR_6758198969",
  "KR_6757419878",
  "KR_6757093561",
  "KR_6757060164",
  "KR_6757018010",
  "KR_6756959583",
  "KR_6756801500",
  "KR_6756725172",
  "KR_6756337495",
  "KR_6756238449",
  "KR_6756199232",
  "KR_6756136321",
  "KR_6755678021",
  "KR_6755593263",
  "KR_6755508772",
  "KR_6755375136",
  "KR_6755315078",
  "KR_6755215702",
  "KR_6755101673",
  "KR_6754995266",
  "KR_6754951485",
  "KR_6754884671",
  "KR_6754851829",
  "KR_6754823608",
  "KR_6754706970",
  "KR_6754538289",
  "KR_6754485973",
  "KR_6754445089",
  "KR_6754423864",
  "KR_6754384117",
  "KR_6754307366",
  "KR_6753691768",
  "KR_6753234777",
  "KR_6753190796",
  "KR_6753130589",
  "KR_6753072132",
  "KR_6752982366",
  "KR_6752909028",
  "KR_6752805822",
  "KR_6752746972",
  "KR_6752644994",
  "KR_6752242104",
  "KR_6752106297",
  "KR_6752038109",
  "KR_6751322615",
  "KR_6751257643",
  "KR_6751147195",
  "KR_6751034942",
  "KR_6751013085",
  "KR_6750911156",
  "KR_6750799232",
  "KR_6749157565",
  "KR_6749086023",
  "KR_6748918639",
  "KR_6748838730",
  "KR_6748564456",
  "KR_6748497947",
  "KR_6748471460",
  "KR_6748106934",
  "KR_6748084955",
  "KR_6748092111",
  "KR_6747760705",
  "KR_6747663090",
  "KR_6745952025",
  "KR_6745892807",
  "KR_6744662816",
  "KR_6744226501",
  "KR_6744201680",
  "KR_6744163712",
  "KR_6744120100",
  "KR_6743971504",
  "KR_6743819796",
  "KR_6743709541",
  "KR_6743621802",
  "KR_6743501653",
  "KR_6743145358",
  "KR_6743049543",
  "KR_6742373551",
  "KR_6742313197",
  "KR_6742241105",
  "KR_6742120265",
  "KR_6741966290",
  "KR_6741868616",
  "KR_6741813136",
  "KR_6741650564",
  "KR_6740930742",
  "KR_6740849490",
  "KR_6739810990",
  "KR_6739734048",
  "KR_6738725453",
  "KR_6738669569",
  "KR_6738582461",
  "KR_6738462993",
  "KR_6738369861",
  "KR_6737086686",
  "KR_6737034412",
  "KR_6736948977",
  "KR_6736859504",
  "KR_6736517720",
  "KR_6736466834",
  "KR_6736431135",
  "KR_6735977816",
  "KR_6735913855",
  "KR_6735850942",
  "KR_6735789015",
  "KR_6735702123",
  "KR_6735629705",
  "KR_6735507406",
  "KR_6735172371",
  "KR_6735128084",
  "KR_6734761504",
  "KR_6734719957",
  "KR_6734707044",
  "KR_6734651610",
  "KR_6734584937",
  "KR_6734428485",
  "KR_6734376487",
  "KR_6734270542",
  "KR_6734187747",
  "KR_6722930738",
  "KR_6722904772",
  "KR_6722820297",
  "KR_6722702987",
  "KR_6719780664",
  "KR_6719714042",
  "KR_6719614142",
  "KR_6719531045",
  "KR_6719448417",
  "KR_6711813940",
  "KR_6711772352",
  "KR_6711707091",
  "KR_6711621740",
  "KR_6710425999",
  "KR_6710377000",
  "KR_6710288980",
  "KR_6710219430",
  "KR_6710127759",
  "KR_6709139845",
  "KR_6709116396",
  "KR_6709056718",
  "KR_6708999056",
  "KR_6708926890",
  "KR_6707195372",
  "KR_6706827292",
  "KR_6705508326",
  "KR_6705413390",
  "KR_6705305515",
  "KR_6705158112",
  "KR_6704264977",
  "KR_6704057063",
  "KR_6701728344",
  "KR_6701629805",
  "KR_6701534387",
  "KR_6701464537",
  "KR_6701288368",
  "KR_6701099846",
  "KR_6699806895",
  "KR_6699722874",
  "KR_6698654360",
  "KR_6698568715",
  "KR_6698512745",
  "KR_6691156289",
  "KR_6691082005",
  "KR_6690979334",
  "KR_6690928262",
  "KR_6689077047",
  "KR_6689032710",
  "KR_6687756403",
  "KR_6687244248",
  "KR_6687176520",
  "KR_6687070259",
  "KR_6686965788",
  "KR_6686876343",
  "KR_6685992245",
  "KR_6685952279",
  "KR_6685895440",
  "KR_6685849307",
  "KR_6685775445",
  "KR_6685555947",
  "KR_6685491661",
  "KR_6685362942",
  "KR_6685291923",
  "KR_6685227190",
  "KR_6685152774",
  "KR_6685058411",
  "KR_6679895985",
  "KR_6679844880",
  "KR_6679806453",
  "KR_6679047763",
  "KR_6678973370",
  "KR_6678877872",
  "KR_6678794798",
  "KR_6678737929",
  "KR_6678658206",
  "KR_6677027984",
  "KR_6676804625",
  "KR_6676758827",
  "KR_6676574422",
  "KR_6676131504",
  "KR_6676056643",
  "KR_6675968678",
  "KR_6675923446",
  "KR_6675812258",
  "KR_6675543502",
  "KR_6674049280",
  "KR_6673968000",
  "KR_6673921430",
  "KR_6673820530",
  "KR_6673736572",
  "KR_6670713084",
  "KR_6670598515",
  "KR_6670513542",
  "KR_6668406448",
  "KR_6668153682",
  "KR_6667558537",
  "KR_6667448144",
  "KR_6667366647",
  "KR_6667286118",
  "KR_6667157781",
  "KR_6667107951",
  "KR_6666995935",
  "KR_6666712166",
  "KR_6666496053",
  "KR_6666465674",
  "KR_6666041079",
  "KR_6665938750",
  "KR_6665833779",
  "KR_6665746049",
  "KR_6665655235",
  "KR_6665600085",
  "KR_6665549220",
  "KR_6665411745",
  "KR_6665254663",
  "KR_6665210760",
  "KR_6665163620",
  "KR_6663095793",
  "KR_6663028111",
  "KR_6662934964",
  "KR_6662828736",
  "KR_6661777330",
  "KR_6659699178",
  "KR_6657948882",
  "KR_6655484697",
  "KR_6653779077",
  "KR_6653688747",
  "KR_6653016948",
  "KR_6651326827",
  "KR_6651202734",
  "KR_6651034835",
  "KR_6647954633",
  "KR_6647874181",
  "KR_6647434979",
  "KR_6647383054",
  "KR_6647213819",
  "KR_6647028408",
  "KR_6646756623",
  "KR_6645630352",
  "KR_6643845239",
  "KR_6643300170",
  "KR_6641376119",
  "KR_6639671164",
  "KR_6638296714",
  "KR_6638038121",
  "KR_6637972976",
  "KR_6637952447",
  "KR_6635956257",
  "KR_6634563763",
  "KR_6634504007",
  "KR_6632346804",
  "KR_6627895343",
  "KR_6627821904",
  "KR_6627713532",
  "KR_6627583946",
  "KR_6624930023",
  "KR_6623525521",
  "KR_6623460413",
  "KR_6623398142",
  "KR_6623289668",
  "KR_6623196929",
    "KR_6622270814",
    "KR_6622154268",
    "KR_6622070451",
    "KR_6620283238",
    "KR_6620132523",
    "KR_6619921322",
    "KR_6618427906",
    "KR_6618378025",
    "KR_6618251661",
    "KR_6618216267",
    "KR_6618131156",
    "KR_6616019123",
    "KR_6615924921",
    "KR_6615861561",
    "KR_6612943023",
    "KR_6612850580",
    "KR_6612804991",
    "KR_6612705393",
    "KR_6612575754",
    "KR_6610918913",
    "KR_6610823671",
    "KR_6610712654",
    "KR_6608679849",
    "KR_6608601350",
    "KR_6608530637",
    "KR_6608478137",
    "KR_6608323987",
    "KR_6608217573",
    "KR_6607753290",
    "KR_6607144460",
    "KR_6607054190",
    "KR_6606973892",
    "KR_6606849212",
    "KR_6606695935",
    "KR_6606161507",
    "KR_6606084524",
    "KR_6605836439",
    "KR_6605695999",
    "KR_6605579316",
    "KR_6605487308",
    "KR_6605377649",
    "KR_6603715036",
    "KR_6603549097",
    "KR_6603432937",
    "KR_6603358881",
    "KR_6603149195",
    "KR_6603072921",
    "KR_6602937606",
    "KR_6602887178",
    "KR_6602860262",
    "KR_6601549546",
    "KR_6601081168",
    "KR_6600534005",
    "KR_6600419575",
    "KR_6600352584",
    "KR_6600253800",
    "KR_6600159343",
    "KR_6600065235",
    "KR_6600035140",
    "KR_6599921793",
    "KR_6599849400",
    "KR_6599770660",
    "KR_6599720123",
    "KR_6599659128",
    "KR_6599599687",
    "KR_6599556817",
    "KR_6599511090",
    "KR_6599468527",
    "KR_6599303903",
    "KR_6598856750",
    "KR_6598795622",
    "KR_6598690926",
    "KR_6598491881",
    "KR_6598311119",
    "KR_6598026871",
    "KR_6596376208",
    "KR_6596314812",
    "KR_6596129771",
    "KR_6596063168",
    "KR_6595081785",
    "KR_6594789257",
    "KR_6594690290",
    "KR_6594599141",
    "KR_6594487476",
    "KR_6594417747",
    "KR_6592757025",
    "KR_6592665596",
    "KR_6592556282",
    "KR_6592449748",
    "KR_6589570719",
    "KR_6589463212",
    "KR_6589339915",
    "KR_6588684255",
    "KR_6588636439",
    "KR_6588363030",
    "KR_6588329817",
    "KR_6588177993",
    "KR_6588133936",
    "KR_6588085612",
    "KR_6588038670",
    "KR_6587925451",
    "KR_6587869531",
    "KR_6587771493",
    "KR_6587461221",
    "KR_6587402661",
    "KR_6587355037",
    "KR_6587308526",
    "KR_6587295540",
    "KR_6587224843",
    "KR_6587098341",
    "KR_6587070085",
    "KR_6586585008",
    "KR_6586433004",
    "KR_6586348148",
    "KR_6586208181",
    "KR_6585061479",
    "KR_6584944723",
    "KR_6584824420",
    "KR_6577723375",
    "KR_6577690465",
    "KR_6577625168",
    "KR_6577450393",
    "KR_6577371469",
    "KR_6559854938",
    "KR_6559779801",
    "KR_6559746042",
    "KR_6559671745",
    "KR_6556425872",
    "KR_6556330866",
    "KR_6556260037",
    "KR_6502094807",
    "KR_6502000593",
    "KR_6501882833",
    "KR_6500579616",
    "KR_6500517909",
    "KR_6500445524",
    "KR_6500387514",
    "KR_6483654370",
    "KR_6483589175",
    "KR_6483478892",
    "KR_6483396287",
    "KR_6483300463",
    "KR_6483178295",
    "KR_6483100132",
    "KR_6482991727",
    "KR_6475734737",
    "KR_6475664317",
    "KR_6475570179",
    "KR_6475283183",
    "KR_6475226220",
    "KR_6475178995",
    "KR_6472047551",
    "KR_6471964539",
    "KR_6471835339",
    "KR_6471773493",
    "KR_6471724011",
    "KR_6471663206",
    "KR_6471432800",
    "KR_6471358847",
    "KR_6463833321",
    "KR_6463761257",
    "KR_6463451545",
    "KR_6463404566",
    "KR_6463317590",
    "KR_6463243532",
    "KR_6463201120",
    "KR_6463135162",
    "KR_6463067986",
    "KR_6462965871",
    "KR_6443966499",
    "KR_6443878757",
    "KR_6443828276",
    "KR_6443807693",
    "KR_6443749864",
    "KR_6443698057",
    "KR_6443639394",
    "KR_6443612134",
    "KR_6443561648",
    "KR_6442072713",
    "KR_6441959836",
    "KR_6441909189",
    "KR_6441813934",
    "KR_6441747736",
    "KR_6441706049",
    "KR_6440301581",
    "KR_6440264652",
    "KR_6440230127",
    "KR_6440205978",
    "KR_6435194455",
    "KR_6435095989",
    "KR_6435017740",
    "KR_6434971634",
    "KR_6433622706",
    "KR_6433548811",
    "KR_6433489462",
    "KR_6433422011",
    "KR_6433298203",
    "KR_6433247004",
    "KR_6433165475",
    "KR_6433145957",
    "KR_6433083141",
    "KR_6420941182",
    "KR_6420882052",
    "KR_6420869021",
    "KR_6420798939",
    "KR_6420749940"
];

const instance = axios.create({
  baseURL: "https://asia.api.riotgames.com",
  headers: {
    "X-Riot-Token": "",
  },
});

let totalTime = 0;
//jong id : jL68hz9jyZDFSMNiPS3bt1Q375XGJ3sTG6nN-wb-GUfHNPzxfDaHysveL-h9ODt6WDmC820dukNIjA
function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

 async function init() {
  for (let i = 0; i < list.length; i++) {
    const id = list[i];
    
      sleep(1500);
      const result = await instance.get(`/lol/match/v5/matches/${id}`)
      const data = result.data
      // console.log(data)
      console.log(`gameid: ${id}  game creation:${data.info.gameCreation}`)
      totalTime +=data.info.gameDuration;
      
  }
  console.log("@@@@ total time:"+totalTime);
}



init();



