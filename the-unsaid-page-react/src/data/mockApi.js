export const mockData = {
    'dust-window': {
        id: 'dust-window',
        title: 'The Dust on the Window Sill',
        date: 'March 15, 2025',
        author: 'Anonymous',
        type: 'Story',
        excerpt: 'A short reflection on the passage of time and the things we leave behind when the seasons change.',
        imgUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        body: `I noticed the dust today. It was sitting across the window sill, illuminated by the slanting rays of the late afternoon sun. It was golden, almost beautiful, in a melancholy sort of way.\n\nIt made me realize how long it has been since I opened that window. How long it has been since I let fresh air into this room. We get so caught up in the routine, the day-to-day survival, that we forget to breathe.\n\nTomorrow, I will wipe the sill clean. But today, I’ll just watch the dust motes dance in the light, a silent testament to the gentle passage of time.`
    },
    'morning-fog': {
        id: 'morning-fog',
        title: 'Morning Fog',
        date: 'April 2, 2025',
        author: 'A. Poet',
        type: 'Poem',
        excerpt: 'The world is soft today, edges blurred by the grey breath of a sleeping giant.',
        imgUrl: null,
        body: `The world is soft today,\nEdges blurred by the grey breath\nOf a sleeping giant.\n\nThe sharp lines of the city\nEased into gentle whispers,\nAnd the heavy noise of the morning commute\nMuffled like secrets told in the dark.\n\nFor a moment,\nWalking through the mist,\nI am nowhere at all,\nAnd that is exactly where I need to be.`
    },
    'gardening-winter': {
        id: 'gardening-winter',
        title: 'Gardening in Winter',
        date: 'January 10, 2025',
        author: 'Anonymous',
        type: 'Story',
        excerpt: 'What we plant when the ground is frozen, waiting for the thaw that always comes.',
        imgUrl: null,
        body: `We plant bulbs in the frozen earth not because we see the spring, but because we believe in it. The soil is hard, the winds are biting, and the sun retreats early. It takes an incredible amount of faith to bury something fragile in the ice and trust that it will find its way back to the light.\n\nSometimes, I feel like those bulbs. Buried under the frost, accumulating energy, waiting for the moment when the ground softens just enough to push through.`
    },
    'the-train-ride': {
        id: 'the-train-ride',
        title: 'The Train Ride Home',
        date: 'February 20, 2025',
        author: 'Anonymous',
        type: 'Story',
        excerpt: 'Watching the city lights blur past the window pane, counting the stations left until I can rest my eyes.',
        imgUrl: 'https://images.unsplash.com/photo-1515516089376-88db1e26e9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        body: `The rhythmic clacking of the wheels against the track is a lullaby. Click-clack, click-clack. The city lights blur past the window, a smeared canvas of neon reds and streetlamp yellows.\n\nReflection in the glass shows a tired face. How many times have I taken this same route? The landscape never changes, but the person looking at it does. Tomorrow, I'll ride the same train, but I won't be the same passenger.`
    },
    'midnight-coffee': {
        id: 'midnight-coffee',
        title: 'Midnight Coffee',
        date: 'March 1, 2025',
        author: 'A. Poet',
        type: 'Poem',
        excerpt: 'Dark reflections in the cup, mirroring the quiet hours where only the hum of the fridge keeps me company.',
        imgUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        body: 'The hum of the fridge is a solitary song.\nA drone that fills the spaces between thoughts.\n\nCoffee in the dark, cold but waking,\nA mirror for eyes too tired to sleep.'
    },
    'echoes': {
        id: 'echoes',
        title: 'Echoes of the Valley',
        date: 'February 14, 2025',
        author: 'Wanderer',
        type: 'Poem',
        excerpt: 'Sound travels far when the mind is empty, bouncing off the canyon walls of memory.',
        imgUrl: null,
        body: 'Hello...\n\n...llo.\n\n...o.\n\nThe canyon remembers my voice\nLong after I have stopped speaking.\nDo they remember me?\nLong after I have left?'
    }
};

const DELAY = 800; // Simulated network delay 800ms

export const fetchPostsList = async (type = 'All') => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const posts = Object.values(mockData);
            if (type !== 'All') {
                resolve(posts.filter(p => p.type === type));
            } else {
                resolve(posts);
            }
        }, DELAY);
    });
};

export const fetchPostById = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mockData[id]) {
                resolve(mockData[id]);
            } else {
                reject(new Error('Post not found'));
            }
        }, DELAY);
    });
};

export const submitPost = async (postData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Post submitted successfully:', postData);
            resolve({ success: true, message: 'Your words have been received by the void.' });
        }, DELAY + 400); // Take a bit longer for submit
    });
};
