/**
 * Square One Design System - Comparison Matrix Tabs Engine
 * Controls switching and layout transitions smoothly for different metrics.
 */

function switchComparisonTab(panelId, clickTarget) {
    // 1. Clear Active Class configurations from all tab buttons inside left bar row
    const tabs = document.querySelectorAll('.comparison-tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active-matrix-tab');
        tab.classList.remove('text-black');
        tab.classList.add('text-neutral-500');
        tab.classList.remove('font-semibold');
        tab.classList.add('font-medium');
        
        // Hide individual internal label indicators if present
        const arrow = tab.querySelector('span:last-child');
        if(arrow) arrow.style.opacity = '0';
    });

    // 2. Lock Active State properties on the selected target node block button
    clickTarget.classList.add('active-matrix-tab');
    clickTarget.classList.remove('text-neutral-500');
    clickTarget.classList.add('text-black');
    clickTarget.classList.remove('font-medium');
    clickTarget.classList.add('font-semibold');
    
    const activeArrow = clickTarget.querySelector('span:last-child');
    if(activeArrow) activeArrow.style.opacity = '1';

    // 3. Perform Content Grid Panels fade-switch animation routine
    const panels = document.querySelectorAll('.comparison-panel');
    
    panels.forEach(panel => {
        // Hide panel container structure out of active viewport flow securely
        panel.classList.add('hidden');
        panel.classList.remove('opacity-100');
        panel.classList.add('opacity-0');
    });

    // Target specific selected data cluster view node
    const targetPanel = document.getElementById(`tab-panel-${panelId}`);
    if (targetPanel) {
        targetPanel.classList.remove('hidden');
        
        // Let browser frame settle for a brief millisecond tick layout block before opacity fade in trigger
        setTimeout(() => {
            targetPanel.classList.remove('opacity-0');
            targetPanel.classList.add('opacity-100');
        }, 30);

        // Optional smooth view auto-scroll configuration for comfortable mobile usage
        if(window.innerWidth < 1024) {
            targetPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}