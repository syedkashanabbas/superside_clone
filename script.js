// Placeholder sample images & content to replicate the screenshot portfolio style
const mockImages = [
    { bg: 'bg-blue-600', text: 'Wilson Custom Basketball', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=60' },
    { bg: 'bg-orange-600', text: 'GRUBHUB Food Branding', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=60' },
    { bg: 'bg-teal-700', text: 'Oyster Business Delivery', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=60' },
    { bg: 'bg-purple-600', text: 'SUBLIM Dynamic Packaging', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=60' },
    { bg: 'bg-pink-600', text: 'Outbrain Analytics Dashboard', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60' },
    { bg: 'bg-indigo-800', text: 'Pernod Ricard App Design', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=60' }
];

// Function to generate cards
function createCard(item) {
    return `
        <div class="w-full aspect-[3/4] ${item.bg} rounded-2xl overflow-hidden relative group cursor-pointer shadow-md transform transition duration-500 hover:scale-[1.02]">
            <img src="${item.img}" alt="${item.text}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300">
            <div class="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300">
                <p class="text-xs font-bold tracking-wider uppercase text-neonGreen">Project</p>
                <h4 class="text-sm font-semibold text-white leading-tight mt-1">${item.text}</h4>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const col1 = document.getElementById('col-1');
    const col2 = document.getElementById('col-2');
    const col3 = document.getElementById('col-3');

    // Shuffle array helpers to give random feels to each column
    const itemsCol1 = [...mockImages];
    const itemsCol2 = [...mockImages].reverse();
    const itemsCol3 = [mockImages[3], mockImages[4], mockImages[5], mockImages[0], mockImages[1], mockImages[2]];

    // Function to populate and double the list for infinite seamless scrolling
    function populateColumn(element, items) {
        // Original Set
        let htmlContent = items.map(item => createCard(item)).join('');
        // Duplicated Set for infinite loop illusion
        htmlContent += items.map(item => createCard(item)).join('');
        
        element.innerHTML = htmlContent;
    }

    // Inject data into columns
    populateColumn(col1, itemsCol1);
    populateColumn(col2, itemsCol2);
    populateColumn(col3, itemsCol3);
});