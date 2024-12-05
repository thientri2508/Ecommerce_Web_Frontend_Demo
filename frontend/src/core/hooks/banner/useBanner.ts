import { useQuery } from "@tanstack/react-query";
import { getBannerImage } from "../../services/banner/getBanner";

export const useBanner = (name: string) => 
    useQuery({
      queryKey: ['banners', name],
      queryFn: () => getBannerImage(name),
});