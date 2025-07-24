export type Song = {
  id: string
  title: string
  lyrics: string // Markdown string
}

export type Setlist = {
  id: string
  date: string // e.g., "July 21, 2025"
  songs: Song[]
}

export const setlists: Setlist[] = [
  {
    id: "2025-07-21",
    date: "July 21, 2025",
    songs: [
      {
        id: "song-1",
        title: "Amazing Grace",
        lyrics: `
# Amazing Grace

**Verse 1**
Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.

**Chorus**
Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.

**Verse 2**
'Twas grace that taught my heart to fear,
And grace my fears relieved;
How precious did that grace appear
The hour I first believed!

**Chorus**
Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found;
Was blind, but now I see.
        `,
      },
      {
        id: "song-2",
        title: "How Great Thou Art",
        lyrics: `
# How Great Thou Art

**Verse 1**
O Lord my God, when I in awesome wonder
Consider all the worlds Thy hands have made;
I see the stars, I hear the mighty thunder,
Thy power throughout the universe displayed.

**Chorus**
Then sings my soul, my Savior God, to Thee,
How great Thou art, how great Thou art!
Then sings my soul, my Savior God, to Thee,
How great Thou art, how great Thou art!

**Verse 2**
When through the woods and forest glades I wander
And hear the birds sing sweetly in the trees;
When I look down from lofty mountain grandeur
And hear the brook and feel the gentle breeze.

**Chorus**
Then sings my soul, my Savior God, to Thee,
How great Thou art, how great Thou art!
Then sings my soul, my Savior God, to Thee,
How great Thou art, how great Thou art!
        `,
      },
    ],
  },
  {
    id: "2025-07-28",
    date: "July 28, 2025",
    songs: [
      {
        id: "song-3",
        title: "Blessed Assurance",
        lyrics: `
# Blessed Assurance

**Verse 1**
Blessed assurance, Jesus is mine!
Oh, what a foretaste of glory divine!
Heir of salvation, purchase of God,
Born of His Spirit, washed in His blood.

**Chorus**
This is my story, this is my song,
Praising my Savior all the day long;
This is my story, this is my song,
Praising my Savior all the day long.

**Verse 2**
Perfect submission, perfect delight,
Visions of rapture now burst on my sight;
Angels descending bring from above
Echoes of mercy, whispers of love.

**Chorus**
This is my story, this is my song,
Praising my Savior all the day long;
This is my story, this is my song,
Praising my Savior all the day long.
        `,
      },
      {
        id: "song-4",
        title: "What a Friend We Have in Jesus",
        lyrics: `
# What a Friend We Have in Jesus

**Verse 1**
What a Friend we have in Jesus,
All our sins and griefs to bear!
What a privilege to carry
Everything to God in prayer!
O what peace we often forfeit,
O what needless pain we bear,
All because we do not carry
Everything to God in prayer!

**Chorus**
What a Friend we have in Jesus,
All our sins and griefs to bear!
What a privilege to carry
Everything to God in prayer!

**Verse 2**
Have we trials and temptations?
Is there trouble anywhere?
We should never be discouraged,
Take it to the Lord in prayer.
Can we find a friend so faithful
Who will all our sorrows share?
Jesus knows our every weakness,
Take it to the Lord in prayer.
        `,
      },
    ],
  },
  {
    id: "2025-08-04",
    date: "August 04, 2025",
    songs: [
      {
        id: "song-5",
        title: "Great Is Thy Faithfulness",
        lyrics: `
# Great Is Thy Faithfulness

**Verse 1**
Great is Thy faithfulness, O God my Father,
There is no shadow of turning with Thee;
Thou changest not, Thy compassions, they fail not;
As Thou hast been Thou forever wilt be.

**Chorus**
Great is Thy faithfulness!
Great is Thy faithfulness!
Morning by morning new mercies I see;
All I have needed Thy hand hath provided—
Great is Thy faithfulness, Lord, unto me!

**Verse 2**
Summer and winter, and springtime and harvest,
Sun, moon, and stars in their courses above
Join with all nature in manifold witness
To Thy great faithfulness, mercy, and love.

**Chorus**
Great is Thy faithfulness!
Great is Thy faithfulness!
Morning by morning new mercies I see;
All I have needed Thy hand hath provided—
Great is Thy faithfulness, Lord, unto me!
        `,
      },
    ],
  },
]
