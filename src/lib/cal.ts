import { getCalApi } from "@calcom/embed-react";

export const CAL_LINK = "nathalie-sudre-22dhoq/60min";
export const CAL_NAMESPACE = "60min";

export async function initCal() {
  const cal = await getCalApi({ namespace: CAL_NAMESPACE });
  cal("ui", {
    theme: "light",
    styles: { branding: { brandColor: "#7d9b76" } },
    hideEventTypeDetails: false,
    layout: "month_view",
  });
}

export const calButtonProps = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": JSON.stringify({ layout: "month_view" }),
};
