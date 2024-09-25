package lcw.lcw2_back.service.storage;

import lcw.lcw2_back.dto.StorageDTO;

import java.util.List;

public interface StorageService {

    void plusStorage(StorageDTO storageDTO);

    List<StorageDTO> getStorage();

    void changeStorage(StorageDTO storageDTO);

    void clearStorageOne(Long storageId);
}
