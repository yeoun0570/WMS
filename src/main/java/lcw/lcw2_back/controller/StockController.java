package lcw.lcw2_back.controller;


import lcw.lcw2_back.dto.stock.StockDTO;

import lcw.lcw2_back.dto.stock.page.PageStockRequestDTO;
import lcw.lcw2_back.dto.stock.page.PageStockResponseDTO;
import lcw.lcw2_back.service.stock.StockService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RequiredArgsConstructor
@RestController //HTTP Response Body에 객체 데이터를 JSON 형식으로 반환하는 컨트롤러
@Log4j2
@RequestMapping("/api")
public class StockController {

    private final StockService stockService;

    @GetMapping("/stock/list")
    public ResponseEntity<PageStockResponseDTO<StockDTO>> getList(@RequestBody PageStockRequestDTO pageStockRequestDTO, BindingResult bindingResult) {
        log.info("stock Register~~~~~~~~~");

        PageStockResponseDTO<StockDTO> savedStocks = stockService.listAll(pageStockRequestDTO);

        if(bindingResult.hasErrors()){
            pageStockRequestDTO = PageStockRequestDTO.builder().build();
        }
        return ResponseEntity.ok().body(savedStocks);
    }

    @PutMapping("/stock/modify/{storageId}/{productId}")
    public String modifyQuantity(@PathVariable Long storageId,
                                                                    @PathVariable Long productId,
                                                                    @PathVariable Long quantity,
                                                                    @RequestBody PageStockRequestDTO pageStockRequestDTO,
                                                                    BindingResult bindingResult,
                                                                    RedirectAttributes redirectAttributes) {
        log.info("stock modify~~~~~~~~~");

        stockService.modifyQuantity(storageId,productId, quantity);

        if(bindingResult.hasErrors()){
            pageStockRequestDTO = PageStockRequestDTO.builder().build();
        }
        redirectAttributes.addAttribute("page", pageStockRequestDTO.getPage());
        redirectAttributes.addAttribute("size", pageStockRequestDTO.getSize());
        return "redirect:/api/stock/list";

    }
}