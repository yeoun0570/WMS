package lcw.lcw2_back.service.chart;

import lcw.lcw2_back.domain.chart.DatasetVO;
import lcw.lcw2_back.dto.chart.LossDTO;
import lcw.lcw2_back.dto.chart.StockTendDTO;
import lcw.lcw2_back.dto.chart.StorageUsedDTO;
import lcw.lcw2_back.mapper.ChartMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class ChartServiceImpl implements ChartService{

    private final ModelMapper modelMapper;
    private final ChartMapper chartMapper;

    @Override
    public int getCountOutboundNotDoneList(String userId) {
        return chartMapper.selectCountOutboundNotDoneList(userId);
    }

    @Override
    public int getCountInboundNotDoneList(String userId) {
        return chartMapper.selectCountInboundNotDoneList(userId);
    }

    @Override
    public int getCountOutboundWeekendRequests(String userId) {
        return chartMapper.selectCountOutboundWeekendRequests(userId);
    }

    @Override
    public int getCountOutboundWeekendComplete(String userId) {
        return chartMapper.selectCountOutboundWeekendComplete(userId);
    }

    @Override
    public int getCountInboundWeekendRequests(String userId) {
        return chartMapper.selectCountInboundWeekendRequests(userId);
    }

    @Override
    public int getCountInboundWeekendDone(String userId) {
        return chartMapper.selectCountInboundWeekendDone(userId);
    }

    @Override
    public List<LossDTO> getLoss(String userId) {
        List<DatasetVO> voList = chartMapper.selectLoss(userId);
        List<LossDTO> dtoList = voList.stream()
                .map(vo -> modelMapper.map(vo, LossDTO.class))
                .collect(Collectors.toList());

        return dtoList;
    }

    @Override
    public int getCountInboundMonthNotApproved(String userId) {
        return chartMapper.selectCountInboundMonthNotApproved(userId);
    }

    @Override
    public int getCountInboundMonthApproved(String userId) {
        return chartMapper.selectCountInboundMonthApproved(userId);
    }

    @Override
    public int getCountInboundMonthDone(String userId) {
        return chartMapper.selectCountInboundMonthDone(userId);
    }

    @Override
    public int getCountInboundMonth(String userId) {
        return chartMapper.selectCountInboundMonth(userId);
    }

    @Override
    public int getCountOutboundMonthNotApproved(String userId) {
        return chartMapper.selectCountOutboundMonthNotApproved(userId);
    }

    @Override
    public int getCountOutboundMonthApproved(String userId) {
        return chartMapper.selectCountOutboundMonthApproved(userId);
    }

    @Override
    public int getCountOutboundMonthDone(String userId) {
        return chartMapper.selectCountOutboundMonthDone(userId);
    }

    @Override
    public int getCountOutboundMonth(String userId) {
        return chartMapper.selectCountOutboundMonth(userId);
    }

    @Override
    public List<StorageUsedDTO> getStorageUsed(String userId) {
        List<DatasetVO> voList = chartMapper.selectStorageUsed(userId);
        List<StorageUsedDTO> dtoList = voList.stream()
                .map(vo -> modelMapper.map(vo, StorageUsedDTO.class))
                .collect(Collectors.toList());

        return dtoList;
    }

    @Override
    public List<StockTendDTO> getStockTend(String userId) {
        List<DatasetVO> voList = chartMapper.selectStockTend(userId);
        List<StockTendDTO> dtoList = voList.stream()
                .map(vo -> modelMapper.map(vo, StockTendDTO.class))
                .collect(Collectors.toList());

        return dtoList;
    }
}
