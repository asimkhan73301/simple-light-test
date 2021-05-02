// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJYXKgZnx7Dii2wBUWWZqb
// Component: 2Mo_pg8_qUNmSH
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: g0_j62_BPJp6v/component
import Section from "../../Section"; // plasmic-import: g0bBbzoQq3T-f/component
import Plan from "../../Plan"; // plasmic-import: gPi92wCYn77RcN/component
import Bullet from "../../Bullet"; // plasmic-import: kFjiPgTQ08UYEF/component
import LinkButton from "../../LinkButton"; // plasmic-import: 0LMnkmQ24vQZ6/component
import Faq from "../../Faq"; // plasmic-import: Y07cJb5HsPr_VF/component
import Footer from "../../Footer"; // plasmic-import: 4Wkg2j6gx9N6n/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yWp7-4FoVwA9fa/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: wJYXKgZnx7Dii2wBUWWZqb/projectcss
import * as sty from "./PlasmicPricing.module.css"; // plasmic-import: 2Mo_pg8_qUNmSH/css

export type PlasmicPricing__VariantMembers = {};

export type PlasmicPricing__VariantsArgs = {};
type VariantPropType = keyof PlasmicPricing__VariantsArgs;
export const PlasmicPricing__VariantProps = new Array<VariantPropType>();

export type PlasmicPricing__ArgsType = {};
type ArgPropType = keyof PlasmicPricing__ArgsType;
export const PlasmicPricing__ArgProps = new Array<ArgPropType>();

export type PlasmicPricing__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPricingProps {
  className?: string;
}

function PlasmicPricing__RenderFunc(props: {
  variants: PlasmicPricing__VariantsArgs;
  args: PlasmicPricing__ArgsType;
  overrides: PlasmicPricing__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__twGi6)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__kd8BW)}
              subtitle={
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__asdhv
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__oxag2)}
                  >
                    <Plan
                      className={classNames("__wab_instance", sty.plan__lx1T)}
                      price={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__ez11C
                          )}
                        >
                          {"$10"}
                        </div>
                      }
                    >
                      <LinkButton
                        text={"Get started"}
                        type={"outlineBlue" as const}
                      />
                    </Plan>

                    <Plan
                      className={classNames("__wab_instance", sty.plan__rFhPu)}
                      description={
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(defaultcss.all, sty.box__zpw)}
                        >
                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet__t4Gqc
                            )}
                          />

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet__u1X2M
                            )}
                          />

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet__r9Ymp
                            )}
                          />

                          <Bullet
                            className={classNames(
                              "__wab_instance",
                              sty.bullet___8W9Mz
                            )}
                          />
                        </p.Stack>
                      }
                      name={"Team"}
                      price={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__mhbE6
                          )}
                        >
                          {"$49"}
                        </div>
                      }
                    >
                      <LinkButton
                        text={"Get started"}
                        type={"solidBlue" as const}
                      />
                    </Plan>

                    <Plan
                      className={classNames("__wab_instance", sty.plan__jbZvD)}
                      name={"Enterprise"}
                      price={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__wrOd
                          )}
                        >
                          {"$199"}
                        </div>
                      }
                    >
                      <LinkButton
                        text={"Contact us"}
                        type={"outlineBlue" as const}
                      />
                    </Plan>
                  </p.Stack>
                </React.Fragment>
              }
              title={"Pricing"}
            />

            <Section
              className={classNames("__wab_instance", sty.section__mP9)}
              subtitle={
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__jeB6Y
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  </div>

                  <Faq
                    className={classNames("__wab_instance", sty.faq__jL20)}
                    slot={
                      "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  >
                    {"Are there long-term contracts?"}
                  </Faq>

                  <Faq
                    className={classNames("__wab_instance", sty.faq__jPh7S)}
                    slot={
                      "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  >
                    {"Can I add or remove licenses?"}
                  </Faq>

                  <Faq
                    className={classNames("__wab_instance", sty.faq___9Vo6K)}
                    slot={
                      "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  >
                    {"Do you offer refunds?"}
                  </Faq>
                </React.Fragment>
              }
              title={"FAQ"}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "footer"],
  header: ["header"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricing__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPricing__VariantsArgs;
  args?: PlasmicPricing__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPricing__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPricing__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricing__ArgProps,
      internalVariantPropNames: PlasmicPricing__VariantProps
    });

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing";
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`;
  }
  return func;
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps
  }
);

export default PlasmicPricing;
/* prettier-ignore-end */
