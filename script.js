// Turing Machine Simulation Data
const examples = {
    'ab': {
        input: 'ab',
        output: 'abbaab',
        steps: [
            { 
                tape: ['a', 'b', '_', '_', '_', '_', '_'], 
                head: 0, 
                state: 'q₀', 
                desc: '🎬 Initial configuration - Starting with input "ab"'
            },
            { 
                tape: ['X', 'b', '_', '_', '_', '_', '_'], 
                head: 1, 
                state: 'q₁', 
                desc: '✏️ Marked first \'a\' as X, moving right to copy'
            },
            { 
                tape: ['X', 'b', 'a', '_', '_', '_', '_'], 
                head: 2, 
                state: 'q₁', 
                desc: '📝 Wrote \'a\' at end, copying first character'
            },
            { 
                tape: ['X', 'b', 'a', '_', '_', '_', '_'], 
                head: 1, 
                state: 'q₀', 
                desc: '⬅️ Moving back to find next unmarked character'
            },
            { 
                tape: ['X', 'Y', 'a', '_', '_', '_', '_'], 
                head: 2, 
                state: 'q₂', 
                desc: '✏️ Marked \'b\' as Y, copying second character'
            },
            { 
                tape: ['X', 'Y', 'a', 'b', '_', '_', '_'], 
                head: 3, 
                state: 'q₂', 
                desc: '📝 Wrote \'b\' at end - Phase 1 complete: ww created'
            },
            { 
                tape: ['X', 'Y', 'a', 'b', '_', '_', '_'], 
                head: 4, 
                state: 'q₃', 
                desc: '🔄 Starting Phase 2: Finding end to begin reversal'
            },
            { 
                tape: ['X', 'Y', 'b', 'a', '_', '_', '_'], 
                head: 2, 
                state: 'q₄', 
                desc: '🔀 Reversed! Swapped positions: ab → ba (wwᴿ created)'
            },
            { 
                tape: ['a', 'b', 'b', 'a', '_', '_', '_'], 
                head: 0, 
                state: 'q₅', 
                desc: '🎯 Starting Phase 3: Unmarking and appending original w'
            },
            { 
                tape: ['a', 'b', 'b', 'a', 'a', '_', '_'], 
                head: 4, 
                state: 'q₅', 
                desc: '➕ Appending first character \'a\' from original w'
            },
            { 
                tape: ['a', 'b', 'b', 'a', 'a', 'b', '_'], 
                head: 5, 
                state: 'q₅', 
                desc: '➕ Appending second character \'b\' from original w'
            },
            { 
                tape: ['a', 'b', 'b', 'a', 'a', 'b', '_'], 
                head: 6, 
                state: 'qf', 
                desc: '✅ COMPLETE! Final output: abbaab = w·wᴿ·w'
            }
        ]
    },
    'baa': {
        input: 'baa',
        output: 'baaaabbaa',
        steps: [
            { 
                tape: ['b', 'a', 'a', '_', '_', '_', '_', '_', '_', '_'], 
                head: 0, 
                state: 'q₀', 
                desc: '🎬 Initial configuration - Starting with input "baa"'
            },
            { 
                tape: ['X', 'a', 'a', '_', '_', '_', '_', '_', '_', '_'], 
                head: 1, 
                state: 'q₁', 
                desc: '✏️ Marked first \'b\' as X, moving to copy'
            },
            { 
                tape: ['X', 'a', 'a', 'b', '_', '_', '_', '_', '_', '_'], 
                head: 3, 
                state: 'q₁', 
                desc: '📝 Copied \'b\' to end of tape'
            },
            { 
                tape: ['X', 'a', 'a', 'b', '_', '_', '_', '_', '_', '_'], 
                head: 1, 
                state: 'q₀', 
                desc: '⬅️ Moving back to find next character'
            },
            { 
                tape: ['X', 'Y', 'a', 'b', '_', '_', '_', '_', '_', '_'], 
                head: 2, 
                state: 'q₂', 
                desc: '✏️ Marked second \'a\' as Y, copying'
            },
            { 
                tape: ['X', 'Y', 'a', 'b', 'a', '_', '_', '_', '_', '_'], 
                head: 4, 
                state: 'q₂', 
                desc: '📝 Copied first \'a\' to end'
            },
            { 
                tape: ['X', 'Y', 'a', 'b', 'a', '_', '_', '_', '_', '_'], 
                head: 2, 
                state: 'q₀', 
                desc: '⬅️ Moving back for last character'
            },
            { 
                tape: ['X', 'Y', 'Z', 'b', 'a', '_', '_', '_', '_', '_'], 
                head: 3, 
                state: 'q₃', 
                desc: '✏️ Marked last \'a\' as Z, copying'
            },
            { 
                tape: ['X', 'Y', 'Z', 'b', 'a', 'a', '_', '_', '_', '_'], 
                head: 5, 
                state: 'q₃', 
                desc: '📝 Copied second \'a\' - Phase 1 complete: baa|baa'
            },
            { 
                tape: ['X', 'Y', 'Z', 'b', 'a', 'a', '_', '_', '_', '_'], 
                head: 6, 
                state: 'q₄', 
                desc: '🔄 Phase 2: Finding boundaries for reversal'
            },
            { 
                tape: ['X', 'Y', 'Z', 'a', 'a', 'b', '_', '_', '_', '_'], 
                head: 3, 
                state: 'q₄', 
                desc: '🔀 Reversed middle section: baa → aab'
            },
            { 
                tape: ['b', 'a', 'a', 'a', 'a', 'b', '_', '_', '_', '_'], 
                head: 0, 
                state: 'q₅', 
                desc: '🎯 Phase 3: Unmarking and preparing to append'
            },
            { 
                tape: ['b', 'a', 'a', 'a', 'a', 'b', 'b', '_', '_', '_'], 
                head: 6, 
                state: 'q₅', 
                desc: '➕ Appending \'b\' from original w'
            },
            { 
                tape: ['b', 'a', 'a', 'a', 'a', 'b', 'b', 'a', '_', '_'], 
                head: 7, 
                state: 'q₅', 
                desc: '➕ Appending first \'a\' from original w'
            },
            { 
                tape: ['b', 'a', 'a', 'a', 'a', 'b', 'b', 'a', 'a', '_'], 
                head: 8, 
                state: 'q₅', 
                desc: '➕ Appending second \'a\' from original w'
            },
            { 
                tape: ['b', 'a', 'a', 'a', 'a', 'b', 'b', 'a', 'a', '_'], 
                head: 9, 
                state: 'qf', 
                desc: '✅ COMPLETE! Final output: baaaabbaa = w·wᴿ·w'
            }
        ]
    },
    'aba': {
        input: 'aba',
        output: 'abaabaaба',
        steps: [
            { 
                tape: ['a', 'b', 'a', '_', '_', '_', '_', '_', '_'], 
                head: 0, 
                state: 'q₀', 
                desc: '🎬 Initial configuration - Starting with input "aba"'
            },
            { 
                tape: ['X', 'b', 'a', '_', '_', '_', '_', '_', '_'], 
                head: 1, 
                state: 'q₁', 
                desc: '✏️ Marked first \'a\' as X'
            },
            { 
                tape: ['X', 'b', 'a', 'a', '_', '_', '_', '_', '_'], 
                head: 3, 
                state: 'q₁', 
                desc: '📝 Copied \'a\' to end'
            },
            { 
                tape: ['X', 'Y', 'a', 'a', '_', '_', '_', '_', '_'], 
                head: 2, 
                state: 'q₂', 
                desc: '✏️ Marked \'b\' as Y'
            },
            { 
                tape: ['X', 'Y', 'a', 'a', 'b', '_', '_', '_', '_'], 
                head: 4, 
                state: 'q₂', 
                desc: '📝 Copied \'b\' to end'
            },
            { 
                tape: ['X', 'Y', 'Z', 'a', 'b', '_', '_', '_', '_'], 
                head: 3, 
                state: 'q₃', 
                desc: '✏️ Marked last \'a\' as Z'
            },
            { 
                tape: ['X', 'Y', 'Z', 'a', 'b', 'a', '_', '_', '_'], 
                head: 5, 
                state: 'q₃', 
                desc: '📝 Copied last \'a\' - Phase 1 complete: aba|aba'
            },
            { 
                tape: ['X', 'Y', 'Z', 'a', 'b', 'a', '_', '_', '_'], 
                head: 6, 
                state: 'q₄', 
                desc: '🔄 Starting reversal process'
            },
            { 
                tape: ['X', 'Y', 'Z', 'a', 'b', 'a', '_', '_', '_'], 
                head: 3, 
                state: 'q₄', 
                desc: '🔀 Reversed: aba → aba (palindrome!)'
            },
            { 
                tape: ['a', 'b', 'a', 'a', 'b', 'a', '_', '_', '_'], 
                head: 0, 
                state: 'q₅', 
                desc: '🎯 Phase 3: Appending original w'
            },
            { 
                tape: ['a', 'b', 'a', 'a', 'b', 'a', 'a', '_', '_'], 
                head: 6, 
                state: 'q₅', 
                desc: '➕ Appending first \'a\''
            },
            { 
                tape: ['a', 'b', 'a', 'a', 'b', 'a', 'a', 'b', '_'], 
                head: 7, 
                state: 'q₅', 
                desc: '➕ Appending \'b\''
            },
            { 
                tape: ['a', 'b', 'a', 'a', 'b', 'a', 'a', 'b', 'a'], 
                head: 8, 
                state: 'qf', 
                desc: '✅ COMPLETE! Final: abaabaaба = w·wᴿ·w'
            }
        ]
    }
};

// Global state
let selectedExample = 'ab';
let currentStep = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderTape();
});

// Render the tape display
function renderTape() {
    const example = examples[selectedExample];
    const step = example.steps[currentStep];
    const tapeDisplay = document.getElementById('tape-display');
    
    // Create tape cells
    let tapeHTML = '<div class="tape-container">';
    step.tape.forEach((cell, idx) => {
        const isActive = idx === step.head ? 'active' : '';
        const displayCell = cell === '_' ? '␣' : cell;
        tapeHTML += `<div class="tape-cell ${isActive}">${displayCell}</div>`;
    });
    tapeHTML += '</div>';
    
    // Add head indicator
    tapeHTML += '<div class="head-indicator">▲</div>';
    
    tapeDisplay.innerHTML = tapeHTML;
    
    // Update state information
    document.getElementById('current-state').textContent = step.state;
    document.getElementById('head-pos').textContent = step.head;
    document.getElementById('step-count').textContent = currentStep + 1;
    document.getElementById('step-desc').textContent = step.desc;
    
    // Update buttons
    updateButtons();
}

// Update button states
function updateButtons() {
    const example = examples[selectedExample];
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-control');
    
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === example.steps.length - 1;
    
    if (currentStep === example.steps.length - 1) {
        nextBtn.textContent = '✅ Completed';
    } else {
        nextBtn.textContent = 'Next Step ▶️';
    }
}

// Move to next step
function nextStep() {
    const example = examples[selectedExample];
    if (currentStep < example.steps.length - 1) {
        currentStep++;
        renderTape();
    }
}

// Move to previous step
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderTape();
    }
}

// Reset simulation
function reset() {
    currentStep = 0;
    renderTape();
}

// Change example
function changeExample(ex) {
    selectedExample = ex;
    currentStep = 0;
    
    // Update button states
    const buttons = document.querySelectorAll('.btn-example');
    buttons.forEach(btn => {
        if (btn.textContent.includes(ex)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update info banner
    const example = examples[ex];
    document.getElementById('input-text').textContent = example.input;
    document.getElementById('output-text').textContent = example.output;
    
    renderTape();
}

// Run custom input
function runCustomInput() {
    const input = document.getElementById('custom-input').value.trim().toLowerCase();
    
    // Validate input
    if (!input) {
        alert('⚠️ Please enter a string!');
        return;
    }
    
    if (!/^[ab]+$/.test(input)) {
        alert('⚠️ Please use only characters \'a\' and \'b\'!');
        return;
    }
    
    if (input.length > 5) {
        alert('⚠️ Please enter a string with maximum 5 characters for better visualization!');
        return;
    }
    
    // Check if example already exists
    if (examples[input]) {
        changeExample(input);
        return;
    }
    
    // Generate output
    const output = generateOutput(input);
    alert(`✅ Result for "${input}":\n\nOutput: ${output}\n\n📊 Breakdown:\nw = ${input}\nwᴿ = ${reverseString(input)}\nwwᴿw = ${output}`);
}

// Generate output for custom input
function generateOutput(w) {
    const wReverse = reverseString(w);
    return w + wReverse + w;
}

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextStep();
    } else if (e.key === 'ArrowLeft') {
        prevStep();
    } else if (e.key === 'r' || e.key === 'R') {
        reset();
    }
});
