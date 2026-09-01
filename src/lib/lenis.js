/**
 * Module-level handle on the Lenis instance created in App.
 * Lets any component pause/resume smooth scrolling (e.g. the mobile menu)
 * without threading the instance through props.
 */
let instance = null;

export const setLenis = (l) => {
  instance = l;
};

export const getLenis = () => instance;

const headerOffset = () =>
  -(parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
    10
  ) || 84) - 16;

/**
 * Move keyboard focus to the section we just scrolled to, so tabbing continues
 * from there. Deferred until the scroll settles — focusing mid-animation makes
 * the browser scroll-anchor and fight whatever is animating.
 */
const focusTarget = (target) => {
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
};

/** Scroll to an element id, offsetting for the fixed header. */
export const scrollToId = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(target, {
      offset: headerOffset(),
      // The mobile drawer stops Lenis before this runs; force lets the
      // scroll through, and the drawer's effect restarts it right after.
      force: true,
      onComplete: () => focusTarget(target),
    });
    return;
  }

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY + headerOffset(),
    behavior: 'smooth',
  });
  focusTarget(target);
};

/** Scroll back to the top of the page. */
export const scrollToTop = () => {
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(0, { force: true });
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};
