<template>
    <Transition
        enter-class="route-transition--enter"
        enter-active-class="route-transition--entering"
        enter-to-class="route-transition--entered"
        leave-class="route-transition--leave"
        leave-active-class="route-transition--leaving"
        leave-to-class="route-transition--left"
        mode="out-in"
    >
        <slot />
    </Transition>
</template>

<script>
export default {
    name: 'RouteTransition'
}
</script>

<style lang="scss">
.route-transition {
  &--enter {
    z-index: 2;
    transform: translateX(100%);
    opacity: 0;
  }

  &--entering {
    /* stylelint-disable */
    transition: opacity 0.2s linear, transform 0.2s cubic-bezier(0, 0, 0.2, 1);
    /* stylelint-enable */
    transform-origin: top;
    will-change: opacity, transform;
  }

  &--entered {
    transform: translate(0);
    opacity: 1;
  }

  &--leave {
    opacity: 1;
    transform: translate(0);
  }

  &--leaving {
    /* stylelint-disable */
    transition: opacity 0.1s linear, transform 0.15s cubic-bezier(0, 0, 0.2, 1);
    /* stylelint-enable */
  }

  &--left {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
