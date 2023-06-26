interface IAnimationRightOption {
    initial: Record<string, number>;
    animate: Record<string, number>;
    transition: { ease: string; duration: number };
};

type IAnimation = IAnimationRightOption;
type IAnimationCategory = 'fromRight' | 'fromBottom' | 'fromLeft' | 'fromTop';

class Animate {
    initial: Record<string, number>;
    animate: Record<string, number>;
    transition: { ease: string; duration: number };

    constructor(initial: Record<string, number>) {
        this.initial = initial;
        this.animate = initial.x ? { x: 0 } : { y: 0 };
        this.transition = { ease: "easeOut", duration: 1 };
    };
};

export const motionAnimation: Record<IAnimationCategory, IAnimation> = {
    fromRight: new Animate({ x: -999 }),
    fromBottom: new Animate({ y: -999 }),
    fromLeft: new Animate({ x: 999 }),
    fromTop: new Animate({ y: 999 }),
};